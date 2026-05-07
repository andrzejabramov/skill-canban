import React, { useState, useEffect, useRef } from "react";
import { useKanban } from "../../context/KanbanContext";
import { ColumnId } from "../../types";
import TaskCard from "./TaskCard";
import AddCardForm from "./AddCardForm";
import styles from "./Column.module.css";

interface ColumnProps {
  columnId: ColumnId;
  title: string;
}

const sourceMap: Record<ColumnId, ColumnId | null> = {
  backlog: null,
  ready: "backlog",
  "in-progress": "ready",
  finished: "in-progress",
};

const Column: React.FC<ColumnProps> = ({ columnId, title }) => {
  const { state, dispatch } = useKanban();

  // ✅ Получаем задачи через фильтрацию из общего стейта (гарантирует реактивность)
  const tasks = Object.values(state.tasks).filter(
    (t) => t.columnId === columnId,
  );

  const isBacklog = columnId === "backlog";
  const sourceId = sourceMap[columnId];

  // ✅ Источник задач для перемещения (пересчитывается при любом изменении стейта)
  const sourceTasks = sourceId
    ? Object.values(state.tasks).filter((t) => t.columnId === sourceId)
    : [];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isFormOpen && listRef.current) {
      listRef.current.parentElement?.scrollTo({
        top: 9999,
        behavior: "smooth",
      });
    }
  }, [isFormOpen]);

  const toggleForm = () => setIsFormOpen(!isFormOpen);
  const closeForm = () => {
    setIsFormOpen(false);
    setInputValue("");
  };

  const handleAddTask = () => {
    if (inputValue.trim().length === 0) return;
    dispatch({
      type: "ADD_TASK",
      payload: { columnId: "backlog", title: inputValue.trim() },
    });
    closeForm();
  };

  const handleMoveTask = (taskId: string) => {
    if (!taskId) return;
    const from = sourceMap[columnId];
    if (from) {
      dispatch({ type: "MOVE_TASK", payload: { taskId, from, to: columnId } });
      closeForm();
    }
  };

  // ✅ Явное условие: кнопка дизейблена, если не бэклог И в источнике нет задач
  const isAddButtonDisabled = !isBacklog && sourceTasks.length === 0;

  return (
    <section className={styles.column}>
      <h2 className={styles.columnTitle}>{title}</h2>

      <div className={styles.scrollArea}>
        <ul className={styles.columnList} ref={listRef}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}

          {isFormOpen && (
            <AddCardForm
              isBacklog={isBacklog}
              inputValue={inputValue}
              onInputChange={setInputValue}
              sourceTasks={sourceTasks}
              onSelectTask={handleMoveTask}
              onClose={closeForm}
            />
          )}
        </ul>
      </div>

      {/* ✅ ФУТЕР: Кнопка с корректным disabled */}
      <footer className={styles.columnFooter}>
        {isBacklog && isFormOpen ? (
          <button
            className={styles.submitBtn}
            type="button"
            onClick={handleAddTask}
            disabled={inputValue.trim().length === 0}
          >
            Submit
          </button>
        ) : (
          <button
            className={styles.addButton}
            type="button"
            onClick={toggleForm}
            disabled={isAddButtonDisabled} // ✅ Ключевая строка
          >
            + Add card
          </button>
        )}
      </footer>
    </section>
  );
};

export default Column;
