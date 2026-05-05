// src/pages/HomePage.tsx
import React from "react";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import KanbanBoard from "../features/kanban/KanbanBoard";

const HomePage: React.FC = () => (
  <>
    <Header />
    <main>
      <KanbanBoard />
    </main>
    <Footer />
  </>
);

export default HomePage;
