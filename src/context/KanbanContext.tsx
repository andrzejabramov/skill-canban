import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { ColumnId, Task, KanbanState } from "../types"; // Проверь путь, если типы лежат в ../types

type Action =
  | { type: "ADD_TASK"; payload: { columnId: ColumnId; title: string } }
  | {
      type: "MOVE_TASK";
      payload: { taskId: string; from: ColumnId; to: ColumnId };
    }
  | {
      type: "UPDATE_TASK";
      payload: { taskId: string; updates: Partial<Pick<Task, "description">> };
    };

const STORAGE_KEY = "kanban-state-v1";

// Пустая структура по умолчанию (без тестовых задач)
const defaultState: KanbanState = {
  columns: {
    backlog: { id: "backlog", title: "Backlog" },
    ready: { id: "ready", title: "Ready" },
    "in-progress": { id: "in-progress", title: "In Progress" },
    finished: { id: "finished", title: "Finished" },
  },
  tasks: {},
  columnOrder: ["backlog", "ready", "in-progress", "finished"],
};

// --- Reducer ---
export const kanbanReducer = (
  state: KanbanState,
  action: Action,
): KanbanState => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTaskId = `task-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
      const newTask: Task = {
        id: newTaskId,
        title: action.payload.title,
        description: "",
        columnId: action.payload.columnId,
      };
      return { ...state, tasks: { ...state.tasks, [newTaskId]: newTask } };
    }
    case "MOVE_TASK": {
      const { taskId, to } = action.payload;
      const task = state.tasks[taskId];
      if (!task) return state;
      return {
        ...state,
        tasks: { ...state.tasks, [taskId]: { ...task, columnId: to } },
      };
    }
    case "UPDATE_TASK": {
      const { taskId, updates } = action.payload;
      const task = state.tasks[taskId];
      if (!task) return state;
      return {
        ...state,
        tasks: { ...state.tasks, [taskId]: { ...task, ...updates } },
      };
    }
    default:
      return state;
  }
};

// --- Context ---
interface KanbanContextType {
  state: KanbanState;
  dispatch: React.Dispatch<Action>;
  getTasksByColumn: (columnId: ColumnId) => Task[];
}

const KanbanContext = createContext<KanbanContextType | null>(null);

// --- Provider ---
export const KanbanProvider = ({ children }: { children: ReactNode }) => {
  // ✅ Ленивая инициализация: читаем localStorage ТОЛЬКО при первом рендере
  const loadState = (): KanbanState => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultState;
    } catch {
      return defaultState;
    }
  };

  const [state, dispatch] = useReducer(kanbanReducer, undefined, loadState);

  // ✅ Сохранение в localStorage с обработкой ошибок
  useEffect(() => {
    // ✅ Логируем только в режиме разработки
    if (process.env.NODE_ENV === "development") {
      console.log(
        "🔄 [KanbanContext] State изменился. Текущие задачи:",
        state.tasks,
      );
    }

    try {
      const serialized = JSON.stringify(state);
      localStorage.setItem(STORAGE_KEY, serialized);

      // ✅ Логи успешного сохранения — тоже только в dev
      if (process.env.NODE_ENV === "development") {
        console.log("✅ [LocalStorage] Сохранено успешно! Ключ:", STORAGE_KEY);
        console.log(
          "💾 [LocalStorage] Размер данных:",
          serialized.length,
          "символов",
        );
      }
    } catch (error) {
      // ✅ Ошибки логируем всегда (важно для отладки в продакшене)
      console.error("❌ Failed to save to localStorage:", error);
    }
  }, [state]);

  const getTasksByColumn = useCallback(
    (columnId: ColumnId) =>
      Object.values(state.tasks).filter((task) => task.columnId === columnId),
    [state.tasks],
  );

  return (
    <KanbanContext.Provider value={{ state, dispatch, getTasksByColumn }}>
      {children}
    </KanbanContext.Provider>
  );
};

// --- Hook ---
export const useKanban = () => {
  const context = useContext(KanbanContext);
  if (!context)
    throw new Error("useKanban must be used within a KanbanProvider");
  return context;
};
