import React from "react";
import { useNavigate } from "react-router-dom";
import { Task } from "../../types";
import styles from "./TaskCard.module.css";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/tasks/${task.id}`);
  };

  return (
    <li className={styles.card}>
      <p className={styles.cardTitle} onClick={handleTitleClick}>
        {task.title}
      </p>
    </li>
  );
};

export default TaskCard;
