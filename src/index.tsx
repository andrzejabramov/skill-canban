// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { KanbanProvider } from "./context/KanbanContext";
import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    {/* ✅ basename берёт путь репозитория из package.json */}
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <KanbanProvider>
        <App />
      </KanbanProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
