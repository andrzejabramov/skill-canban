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
        <div className={styles.avatarCircle}>
          <div className={styles.avatarInner}>
            <img
              src="./img/user-avatar.svg"
              alt="User avatar"
              className={styles.avatarImg}
            />
          </div>
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
