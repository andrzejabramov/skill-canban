// src/context/KanbanContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

import { KanbanState, KanbanAction, Task, ColumnId } from "../types";
import { initialData } from "../services/mockData";
import { loadState, saveState } from "../services/storage";

interface KanbanContextValue {
  state: KanbanState;
  dispatch: React.Dispatch<KanbanAction>;
  getTasksByColumn: (columnId: ColumnId) => Task[];
}

const KanbanContext = createContext<KanbanContextValue | undefined>(undefined);

const kanbanReducer = (
  state: KanbanState,
  action: KanbanAction,
): KanbanState => {
  switch (action.type) {
    case "ADD_TASK": {
      const { columnId, title } = action.payload;
      const newTask: Task = {
        id: uuidv4(),
        title: title.trim(),
        createdAt: Date.now(),
      };
      return {
        ...state,
        tasks: { ...state.tasks, [newTask.id]: newTask },
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            taskIds: [...state.columns[columnId].taskIds, newTask.id],
          },
        },
      };
    }

    case "MOVE_TASK": {
      const { taskId, from, to } = action.payload;
      if (from === to) return state;

      const fromColumn = state.columns[from];
      const toColumn = state.columns[to];

      return {
        ...state,
        columns: {
          ...state.columns,
          [from]: {
            ...fromColumn,
            taskIds: fromColumn.taskIds.filter((id) => id !== taskId),
          },
          [to]: {
            ...toColumn,
            taskIds: [...toColumn.taskIds, taskId],
          },
        },
      };
    }

    case "UPDATE_TASK": {
      const { taskId, updates } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [taskId]: { ...state.tasks[taskId], ...updates },
        },
      };
    }

    case "LOAD_STATE":
      return action.payload;

    case "DELETE_TASK": {
      const { taskId, columnId } = action.payload;
      const { [taskId]: removed, ...restTasks } = state.tasks;
      return {
        ...state,
        tasks: restTasks,
        columns: {
          ...state.columns,
          [columnId]: {
            ...state.columns[columnId],
            taskIds: state.columns[columnId].taskIds.filter(
              (id) => id !== taskId,
            ),
          },
        },
      };
    }

    default:
      return state;
  }
};

export const KanbanProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(kanbanReducer, initialData);

  React.useEffect(() => {
    const saved = loadState();
    if (saved) dispatch({ type: "LOAD_STATE", payload: saved });
  }, []);

  React.useEffect(() => {
    saveState(state);
  }, [state]);

  const getTasksByColumn = (columnId: ColumnId): Task[] => {
    return state.columns[columnId].taskIds
      .map((taskId) => state.tasks[taskId])
      .filter((task): task is Task => task !== undefined);
  };

  return (
    <KanbanContext.Provider value={{ state, dispatch, getTasksByColumn }}>
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanban = (): KanbanContextValue => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("useKanban must be used within KanbanProvider");
  }
  return context;
};
