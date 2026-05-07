import React from "react";
import { render, screen } from "@testing-library/react";
import TaskCard from "../TaskCard";
import { Task } from "../../../types";

// ✅ Мок уже подхватится из src/__mocks__/react-router-dom.ts

const mockTask: Task = {
  id: "1",
  title: "Проверить тестирование",
  description: "",
  columnId: "backlog",
};

describe("TaskCard", () => {
  test("корректно рендерит заголовок задачи", () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText(/Проверить тестирование/)).toBeInTheDocument();
  });

  test("карточка имеет корректные атрибуты", () => {
    render(<TaskCard task={mockTask} />);
    const card = screen.getByText(/Проверить тестирование/).closest("li");
    expect(card).toHaveAttribute("class");
  });
});
