// src/components/UserMenu/UserMenu.tsx
import React, { useState } from "react";
import styles from "./UserMenu.module.css";

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.userMenu}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
      >
        {/* ✅ Аватар с инлайн-стилями и фолбэком */}
        <div className={styles.avatarCircle}>
          <img
            src={`${process.env.PUBLIC_URL}/img/user-avatar.svg`}
            alt="User avatar"
            className={styles.avatarImg}
            onError={(e) => {
              const img = e.currentTarget;
              const parent = img?.parentElement;
              if (!parent) return; // ✅ Полная защита от null

              img.style.display = "none";
              parent.style.background = "#0079bf";
              parent.style.color = "#fff";
              parent.style.display = "flex";
              parent.style.alignItems = "center";
              parent.style.justifyContent = "center";
              parent.textContent = "A";
              parent.style.fontSize = "18px";
              parent.style.fontWeight = "bold";
            }}
          />
        </div>

        <div className={styles.arrowBlock}>
          <svg
            className={`${styles.arrowDown} ${isOpen ? styles.open : ""}`}
            viewBox="0 0 12 7.42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 6.42L11 1"
              stroke="var(--color-text-white)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <ul className={styles.dropdown}>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
