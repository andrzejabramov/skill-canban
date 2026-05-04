import React from "react";
import UserMenu from "../../UserMenu/UserMenu";
import styles from "./Header.module.css";

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.titleWrapper}>
      <h1 className={styles.titleText}>Awesome Kanban Board</h1>
    </div>
    <UserMenu />
  </header>
);

export default Header;
