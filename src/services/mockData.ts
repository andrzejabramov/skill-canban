// src/services/mockData.ts
import { KanbanState } from "../types";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../types";

const now = Date.now();

export const initialData: KanbanState = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Изучить требования к проекту",
      description: "Прочитать ТЗ и выделить ключевые фичи",
      createdAt: now - 86400000,
    },
    "task-2": {
      id: "task-2",
      title: "Настроить React + TypeScript",
      description: "Инициализировать проект через CRA",
      createdAt: now - 72000000,
    },
    "task-3": {
      id: "task-3",
      title: "Сверстать макет колонок",
      createdAt: now - 36000000,
    },
    "task-4": {
      id: "task-4",
      title: "Реализовать добавление задачи",
      description: "Форма + валидация + сохранение в стейт",
      createdAt: now - 18000000,
    },
  },
  columns: {
    backlog: {
      id: "backlog",
      title: "Backlog",
      taskIds: ["task-1", "task-2"],
    },
    ready: {
      id: "ready",
      title: "Ready",
      taskIds: ["task-3"],
    },
    "in-progress": {
      id: "in-progress",
      title: "In Progress",
      taskIds: ["task-4"],
    },
    finished: {
      id: "finished",
      title: "Finished",
      taskIds: [],
    },
  },
  columnOrder: ["backlog", "ready", "in-progress", "finished"],
};

// Хелпер для генерации новой задачи (для использования в компонентах)
export const createTask = (title: string, description?: string): Task => ({
  id: uuidv4(),
  title: title.trim(),
  description: description?.trim(),
  createdAt: Date.now(),
});
