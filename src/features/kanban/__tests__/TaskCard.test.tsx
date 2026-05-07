import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TaskCard from "../TaskCard";
import { Task } from "../../../types";

const mockTask: Task = {
  id: "1",
  title: "Проверить тестирование",
  description: "",
  columnId: "backlog",
};

describe("TaskCard", () => {
  test("корректно рендерит заголовок задачи", () => {
    render(
      <MemoryRouter>
        {" "}
        {/* ✅ Оборачиваем в Router для useNavigate */}
        <TaskCard task={mockTask} />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Проверить тестирование/)).toBeInTheDocument();
  });

  test("карточка имеет корректные атрибуты", () => {
    render(
      <MemoryRouter>
        <TaskCard task={mockTask} />
      </MemoryRouter>,
    );
    const card = screen.getByText(/Проверить тестирование/).closest("li");
    expect(card).toHaveAttribute("class");
  });
});
