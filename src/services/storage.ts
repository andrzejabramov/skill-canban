// src/services/storage.ts
import { KanbanState } from "../types";

const STORAGE_KEY = "kanban-state-v1";

export const loadState = (): KanbanState | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as KanbanState) : null;
  } catch (error) {
    console.warn("Failed to load state from localStorage:", error);
    return null;
  }
};

export const saveState = (state: KanbanState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Failed to save state to localStorage:", error);
  }
};
