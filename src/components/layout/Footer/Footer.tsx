import React from "react";
// ✅ Идём на 2 уровня вверх (layout/ -> components/), потом в context
import { useKanban } from "../../../context/KanbanContext";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const { state } = useKanban();
  const activeCount = Object.values(state.tasks).filter(
    (t) => ["backlog", "ready", "in-progress"].includes(t.columnId), // ✅ Используем деструктуризацию
  ).length;
  const finishedCount = Object.values(state.tasks).filter(
    (t) => t.columnId === "finished",
  ).length;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <ul className={styles.statusList}>
        <li className={styles.statusItem}>Active tasks: {activeCount}</li>
        <li className={styles.statusItem}>Finished tasks: {finishedCount}</li>
      </ul>
      <p className={styles.ownerText}>
        Kanban board by <span>YOUR_NAME</span>, {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
