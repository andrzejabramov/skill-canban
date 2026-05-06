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
  const footerRef = useRef<HTMLDivElement>(null);
  const isInputActive =
    inputValue !== UNDERSCORES && inputValue.trim().length > 0;
  const isBacklog = columnId === "backlog";
  const isDisabled = !isBacklog && sourceTasks.length === 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (inputValue === UNDERSCORES) {
      setInputValue(val.replace(/_/g, ""));
    } else {
      setInputValue(val);
    }
  };

  // Авто-скролл вниз при открытии формы
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

  // 🔹 Закрытое состояние (кнопка + Add card)
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

  // 🔹 Backlog: инлайн-инпут с подчеркиваниями — ВСЁ В ОДНОМ <li>
  if (isBacklog) {
    return (
      <li className={styles.newTaskCard}>
        <input
          ref={inputRef}
          className={styles.newTaskInput}
          value={inputValue}
          onChange={handleChange}
          placeholder=""
        />
        <footer ref={footerRef} className={styles.columnFooter}>
          <div className={styles.footerLeft}>
            <span className={styles.plusIcon}>+</span>
            <span className={styles.addText}>Add card</span>
            {isInputActive && (
              <button
                className={styles.submitBtn}
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </footer>
      </li>
    );
  }

  // 🔹 Остальные колонки: инлайн-карточка с нативным <select> — ВСЁ В ОДНОМ <li>
  return (
    <li className={styles.newTaskCard}>
      <select
        className={styles.taskDropdown}
        defaultValue=""
        onChange={(e) => {
          if (e.target.value) {
            handleMoveTask(e.target.value);
          }
        }}
        autoFocus
      >
        <option value="" disabled>
          Move task...
        </option>
        {sourceTasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.title}
          </option>
        ))}
      </select>
      <footer ref={footerRef} className={styles.columnFooter}>
        <button
          type="button"
          className={styles.cancelBtn}
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
      </footer>
    </li>
  );
};

export default AddCardForm;
