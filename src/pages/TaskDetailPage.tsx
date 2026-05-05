import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useKanban } from "../context/KanbanContext";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import styles from "./TaskDetailPage.module.css";

const TaskDetailPage: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useKanban();
  const [isEditing, setIsEditing] = useState(false);
  const [descValue, setDescValue] = useState("");

  const task = taskId ? state.tasks[taskId] : undefined;

  useEffect(() => {
    if (task) setDescValue(task.description || "");
  }, [task]);

  if (!task) {
    navigate("/", { replace: true });
    return null;
  }

  const handleSave = () => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { taskId: task.id, updates: { description: descValue.trim() } },
    });
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === "Escape") {
      setIsEditing(false);
      setDescValue(task.description || "");
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          <button
            className={styles.closeBtn}
            onClick={() => navigate("/")}
            aria-label="Close"
          >
            ×
          </button>
          <h1 className={styles.title}>{task.title}</h1>
          <div className={styles.descriptionBlock}>
            {isEditing ? (
              <textarea
                className={styles.textarea}
                value={descValue}
                onChange={(e) => setDescValue(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                autoFocus
                placeholder="Введите описание..."
              />
            ) : (
              <p
                className={styles.descriptionText}
                onClick={() => setIsEditing(true)}
              >
                {task.description || "This task has no description"}
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TaskDetailPage;
