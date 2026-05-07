import { kanbanReducer, KanbanState } from "../KanbanContext";
import { ColumnId, Task } from "../../types";

describe("kanbanReducer", () => {
  const initialState: KanbanState = {
    columns: {
      backlog: { id: "backlog", title: "Backlog" },
      ready: { id: "ready", title: "Ready" },
      "in-progress": { id: "in-progress", title: "In Progress" },
      finished: { id: "finished", title: "Finished" },
    },
    tasks: {},
    columnOrder: ["backlog", "ready", "in-progress", "finished"],
  };

  test("ADD_TASK добавляет задачу в tasks с правильным columnId", () => {
    const action = {
      type: "ADD_TASK" as const,
      payload: { columnId: "backlog" as ColumnId, title: "Тестовая задача" },
    };

    const newState = kanbanReducer(initialState, action);

    const taskIds = Object.keys(newState.tasks);
    expect(taskIds).toHaveLength(1);

    const task = newState.tasks[taskIds[0]];
    expect(task.title).toBe("Тестовая задача");
    expect(task.columnId).toBe("backlog");
    expect(task.description).toBe("");
    // ✅ localStorage проверяется в интеграционных тестах, не в чистом редюсере
  });

  test("MOVE_TASK меняет columnId у существующей задачи", () => {
    const taskId = "task-test-123";
    const stateWithTask: KanbanState = {
      ...initialState,
      tasks: {
        [taskId]: {
          id: taskId,
          title: "Задача А",
          columnId: "backlog",
          description: "",
        } as Task,
      },
    };

    const action = {
      type: "MOVE_TASK" as const,
      payload: { taskId, from: "backlog" as ColumnId, to: "ready" as ColumnId },
    };

    const newState = kanbanReducer(stateWithTask, action);
    expect(newState.tasks[taskId].columnId).toBe("ready");
    expect(newState.tasks[taskId].title).toBe("Задача А"); // Проверяем, что остальное не сломалось
  });

  test("UPDATE_TASK обновляет description задачи", () => {
    const taskId = "task-update-test";
    const stateWithTask: KanbanState = {
      ...initialState,
      tasks: {
        [taskId]: {
          id: taskId,
          title: "Задача Б",
          columnId: "ready",
          description: "Старое описание",
        } as Task,
      },
    };

    const action = {
      type: "UPDATE_TASK" as const,
      payload: {
        taskId,
        updates: { description: "Новое описание после правки" },
      },
    };

    const newState = kanbanReducer(stateWithTask, action);
    expect(newState.tasks[taskId].description).toBe(
      "Новое описание после правки",
    );
    expect(newState.tasks[taskId].title).toBe("Задача Б");
  });

  test("неизвестный action возвращает состояние без изменений", () => {
    const newState = kanbanReducer(initialState, { type: "UNKNOWN" as any });
    expect(newState).toBe(initialState); // Проверка на неизменность (immutability не требуется, но поведение корректно)
  });
});
