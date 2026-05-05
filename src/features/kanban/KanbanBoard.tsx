import React from "react";
import { useKanban } from "../../context/KanbanContext";
import Column from "./Column";
import styles from "./KanbanBoard.module.css";

const KanbanBoard: React.FC = () => {
  const { state } = useKanban();

  return (
    <section className={styles.mainContent}>
      {state.columnOrder.map((colId) => {
        const column = state.columns[colId];
        return (
          <Column key={column.id} columnId={column.id} title={column.title} />
        );
      })}
    </section>
  );
};

export default KanbanBoard;
