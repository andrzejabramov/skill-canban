import React, { useState, useRef, useEffect } from "react";
import { useKanban } from "../../context/KanbanContext";
import { ColumnId, Task } from "../../types";
import styles from "./AddCardForm.module.css";

interface AddCardFormProps {
  columnId: ColumnId;
  sourceTasks: Task[];
}

const sourceMap: Record<ColumnId, ColumnId | null> = {
  backlog: null,
  ready: "backlog",
  "in-progress": "ready",
  finished: "in-progress",
};

const AddCardForm: React.FC<AddCardFormProps> = ({ columnId, sourceTasks }) => {
  const { dispatch } = useKanban();
  const UNDERSCORES = "______________________________";
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(UNDERSCORES);
  const inputRef = useRef<HTMLInputElement>(null);
  const footerRef = useRef<HTMLDivElement>(null); // ✅ Добавляем реф
  const isInputActive =
    inputValue !== UNDERSCORES && inputValue.trim().length > 0;
  const isBacklog = columnId === "backlog";
  const isDisabled = !isBacklog && sourceTasks.length === 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    // Если сейчас отображаются подчеркивания — удаляем ВСЕ символы "_" из ввода
    if (inputValue === UNDERSCORES) {
      setInputValue(val.replace(/_/g, ""));
    } else {
      setInputValue(val);
    }
  };

  useEffect(() => {
    if (isOpen && footerRef.current) {
      setTimeout(() => {
        footerRef.current!.parentElement?.parentElement?.scrollTo({
          top: 9999,
        });
      }, 50);
    }
  }, [isOpen, inputValue]);

  const handleSubmit = () => {
    if (!isInputActive) return;
    dispatch({
      type: "ADD_TASK",
      payload: { columnId: "backlog", title: inputValue.trim() },
    });
    setInputValue(UNDERSCORES);
    setIsOpen(false);
  };

  const handleMoveTask = (taskId: string) => {
    const from = sourceMap[columnId];
    if (!from) return;
    dispatch({ type: "MOVE_TASK", payload: { taskId, from, to: columnId } });
    setIsOpen(false);
  };

  // FIX: Закрытое состояние (плюс всегда виден)
  if (!isOpen) {
    return (
      <div className={styles.formWrapper}>
        <button
          className={`${styles.addButton} ${isDisabled ? styles.disabled : ""}`}
          type="button"
          onClick={() => setIsOpen(true)}
          disabled={isDisabled}
        >
          <span className={styles.addText}>+ Add card</span>
        </button>
      </div>
    );
  }

  // FIX: Backlog - инлайн карточка
  if (isBacklog) {
    return (
      <>
        <li className={styles.newTaskCard}>
          <input
            ref={inputRef}
            className={styles.newTaskInput}
            value={inputValue}
            onChange={handleChange}
            placeholder=""
          />
        </li>
        <footer ref={footerRef} className={styles.columnFooter}>
          <button
            className={`${styles.submitBtn} ${!isInputActive ? styles.disabled : ""}`}
            type="button"
            onClick={handleSubmit}
            disabled={!isInputActive}
          >
            {isInputActive ? "Submit" : "+ Add card"}
          </button>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </footer>
      </>
    );
  }

  // FIX: Остальные колонки - нативный select
  return (
    <div className={styles.formWrapper}>
      <select
        className={styles.dropdownSelect}
        defaultValue=""
        onChange={(e) => e.target.value && handleMoveTask(e.target.value)}
        autoFocus
      >
        <option value="" disabled>
          Select task...
        </option>
        {sourceTasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.title}
          </option>
        ))}
      </select>
      <button
        type="button"
        className={styles.cancelBtn}
        onClick={() => setIsOpen(false)}
      >
        ×
      </button>
    </div>
  );
};

export default AddCardForm;
