import React from "react";
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
  const { getTasksByColumn } = useKanban();
  const tasks = getTasksByColumn(columnId);
  const sourceId = sourceMap[columnId];
  const sourceTasks = sourceId ? getTasksByColumn(sourceId) : [];

  return (
    <section className={styles.column}>
      <h2 className={styles.columnTitle}>{title}</h2>

      <div className={styles.scrollArea}>
        <ul className={styles.columnList}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          {/* FIX: Форма рендерится внутри списка как последний элемент */}
          <AddCardForm columnId={columnId} sourceTasks={sourceTasks} />
        </ul>
      </div>
    </section>
  );
};

export default Column;
