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
  const { getTasksByColumn, dispatch } = useKanban();
  const tasks = getTasksByColumn(columnId);
  const isBacklog = columnId === "backlog";
  const sourceId = sourceMap[columnId];
  const sourceTasks = sourceId ? getTasksByColumn(sourceId) : [];

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const listRef = useRef<HTMLUListElement>(null);

  // Авто-скролл к форме при открытии
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
      closeForm(); // ✅ Перемещение сразу при выборе
    }
  };

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

      {/* ✅ ФУТЕР: Адаптируется ТОЛЬКО для Backlog */}
      <footer className={styles.columnFooter}>
        {isBacklog && isFormOpen ? (
          // 🔹 Backlog + форма открыта → показываем Submit
          <button
            className={styles.submitBtn}
            type="button"
            onClick={handleAddTask}
          >
            Submit
          </button>
        ) : (
          // 🔹 Все остальные случаи → всегда + Add card
          <button
            className={styles.addButton}
            type="button"
            onClick={toggleForm}
            disabled={!isBacklog && sourceTasks.length === 0}
          >
            + Add card
          </button>
        )}
      </footer>
    </section>
  );
};

export default Column;
