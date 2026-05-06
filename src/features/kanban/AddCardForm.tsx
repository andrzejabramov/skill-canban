import React, { useRef, useEffect } from "react";
import { Task } from "../../types";
import styles from "./AddCardForm.module.css";

interface AddCardFormProps {
  isBacklog: boolean;
  inputValue: string;
  onInputChange: (val: string) => void;
  sourceTasks: Task[];
  onSelectTask: (id: string) => void;
  onClose: () => void;
}

const AddCardForm: React.FC<AddCardFormProps> = ({
  isBacklog,
  inputValue,
  onInputChange,
  sourceTasks,
  onSelectTask,
  onClose,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    if (selectRef.current) selectRef.current.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isBacklog) {
      // Enter в инпуте можно обработать, если нужно, но сабмит теперь в футере
      e.preventDefault();
    }
    if (e.key === "Escape") onClose();
  };

  return (
    <li className={styles.formLi}>
      {isBacklog ? (
        <input
          ref={inputRef}
          className={styles.newTaskInput}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="______________________________"
        />
      ) : (
        <select
          ref={selectRef}
          className={styles.taskDropdown}
          defaultValue=""
          onChange={(e) => onSelectTask(e.target.value)}
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
      )}
      <button type="button" className={styles.cancelBtn} onClick={onClose}>
        ×
      </button>
    </li>
  );
};

export default AddCardForm;
