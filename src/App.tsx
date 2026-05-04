import React from "react";
// ✅ Прямые пути из корня src/
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <div
          style={{
            padding: "24px",
            color: "var(--color-text-white)",
            textAlign: "center",
          }}
        >
          <h2>Основная область доски</h2>
          <p>Ожидает добавления колонок и карточек</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
