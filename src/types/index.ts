// src/types/index.ts

export type ColumnId = "backlog" | "ready" | "in-progress" | "finished";

export interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: number;
}

export interface Column {
  id: ColumnId;
  title: string;
  taskIds: string[]; // порядок задач в колонке
}

export interface KanbanState {
  tasks: Record<string, Task>; // нормализованный словарь задач
  columns: Record<ColumnId, Column>; // колонки по ID
  columnOrder: ColumnId[]; // порядок отображения колонок
}

export interface AddTaskPayload {
  columnId: ColumnId;
  title: string;
}

export interface MoveTaskPayload {
  taskId: string;
  from: ColumnId;
  to: ColumnId;
}

export type KanbanAction =
  | { type: "ADD_TASK"; payload: AddTaskPayload }
  | { type: "MOVE_TASK"; payload: MoveTaskPayload }
  | { type: "UPDATE_TASK"; payload: { taskId: string; updates: Partial<Task> } }
  | { type: "LOAD_STATE"; payload: KanbanState }
  | { type: "DELETE_TASK"; payload: { taskId: string; columnId: ColumnId } };
