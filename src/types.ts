// src/types.ts

export type ColumnId = "backlog" | "ready" | "in-progress" | "finished";

export interface Task {
  id: string;
  title: string;
  description: string;
  columnId: ColumnId;
}

export interface Column {
  id: ColumnId;
  title: string;
}

export interface KanbanState {
  columns: Record<ColumnId, Column>;
  tasks: Record<string, Task>;
  columnOrder: ColumnId[];
}
