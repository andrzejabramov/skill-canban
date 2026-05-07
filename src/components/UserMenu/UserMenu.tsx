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
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            overflow: "hidden",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <img
            src="./img/user-avatar.svg"
            alt="User avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            onError={(e) => {
              // Если SVG не загрузился — покажем цветной круг с буквой
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.parentElement!.style.background = "#0079bf";
              target.parentElement!.textContent = "A";
              target.parentElement!.style.color = "#fff";
              target.parentElement!.style.fontSize = "18px";
              target.parentElement!.style.fontWeight = "bold";
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
