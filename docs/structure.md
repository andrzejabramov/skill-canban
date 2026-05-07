drwxr-xr-x 15 andrejabramov staff 480 May 7 15:35 .
drwxr-xr-x@ 20 andrejabramov staff 640 May 7 14:18 ..
-rw-r--r--@ 1 andrejabramov staff 6148 May 5 11:49 .DS_Store
drwxr-xr-x 14 andrejabramov staff 448 May 7 13:47 .git
-rw-r--r-- 1 andrejabramov staff 322 May 4 19:14 .gitignore
drwxr-xr-x 11 andrejabramov staff 352 May 7 13:50 build
drwxr-xr-x 6 andrejabramov staff 192 May 5 18:54 docs
-rw-r--r-- 1 andrejabramov staff 339 May 7 11:23 jest.config.js
drwxr-xr-x@ 2 andrejabramov staff 64 May 7 11:31 jest.setup.ts
drwxr-xr-x 886 andrejabramov staff 28352 May 7 14:18 node_modules
-rw-r--r-- 1 andrejabramov staff 783129 May 7 12:11 package-lock.json
-rw-r--r-- 1 andrejabramov staff 1404 May 7 12:20 package.json
drwxr-xr-x 9 andrejabramov staff 288 May 5 11:50 public
drwxr-xr-x 19 andrejabramov staff 608 May 7 14:17 src
-rw-r--r-- 1 andrejabramov staff 535 May 4 18:31 tsconfig.json

---src/jest.config.js---
/\*_ @type {import('jest').Config} _/
module.exports = {
testEnvironment: "jsdom",
setupFilesAfterEnv: ["<rootDir>/src/tests/jest.setup.ts"],
moduleNameMapper: {
"\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
},
testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
---end----

---src/tsconfig.json-------
{
"compilerOptions": {
"target": "es5",
"lib": [
"dom",
"dom.iterable",
"esnext"
],
"allowJs": true,
"skipLibCheck": true,
"esModuleInterop": true,
"allowSyntheticDefaultImports": true,
"strict": true,
"forceConsistentCasingInFileNames": true,
"noFallthroughCasesInSwitch": true,
"module": "esnext",
"moduleResolution": "node",
"resolveJsonModule": true,
"isolatedModules": true,
"noEmit": true,
"jsx": "react-jsx"
},
"include": [
"src"
]
}
------end----------

------src/package.json-----------
{
"name": "kanban",
"version": "0.1.0",
"private": true,
"homepage": "https://andrzejabramov.github.io/skill-canban",
"dependencies": {
"@testing-library/dom": "^10.4.1",
"@testing-library/user-event": "^13.5.0",
"@types/jest": "^27.5.2",
"@types/node": "^16.18.126",
"@types/react": "^19.2.14",
"@types/react-dom": "^19.2.3",
"react": "^19.2.5",
"react-dom": "^19.2.5",
"react-router-dom": "^7.14.2",
"react-scripts": "5.0.1",
"typescript": "^4.9.5",
"uuid": "^14.0.0",
"web-vitals": "^2.1.4"
},
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
},
"eslintConfig": {
"extends": [
"react-app",
"react-app/jest"
]
},
"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
},
"devDependencies": {
"@testing-library/jest-dom": "^6.9.1",
"@testing-library/react": "^16.3.2",
"@types/uuid": "^10.0.0",
"gh-pages": "^6.3.0",
"identity-obj-proxy": "^3.0.0",
"jest": "^29.7.0",
"jest-environment-jsdom": "^29.7.0",
"ts-jest": "^29.4.9"
}
}
--------end------------

public/index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>

  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->

  </body>
</html>
------end----------
src/App.css
.App {
  text-align: center;
}

.App-logo {
height: 40vmin;
pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
.App-logo {
animation: App-logo-spin infinite 20s linear;
}
}

.App-header {
background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
}

.App-link {
color: #61dafb;
}

@keyframes App-logo-spin {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
--------end--------

-------src/App.tsx ---------
// src/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskDetailPage from "./pages/TaskDetailPage";

const App: React.FC = () => (
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/tasks/:taskId" element={<TaskDetailPage />} />
</Routes>
);

export default App;
--------end---------

------src/index.css --------
body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
monospace;
}
---------end--------

--------src/index.tsx--------
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
{/_ ✅ basename берёт путь репозитория из package.json _/}
<BrowserRouter
basename={
process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "/"
} >
<KanbanProvider>
<App />
</KanbanProvider>
</BrowserRouter>
</React.StrictMode>,
);
-------end---------

-------src/types.ts--------
// src/types.ts

export type ColumnId = "backlog" | "ready" | "in-progress" | "finished";

export interface Task {
id: string;
title: string;
description: string;
columnId: ColumnId;
}

export interface Column {
id: ColumnId;
title: string;
}

export interface KanbanState {
columns: Record<ColumnId, Column>;
tasks: Record<string, Task>;
columnOrder: ColumnId[];
}
---------end-----------

------src/types/insex.ts---------
id: ColumnId;
title: string;
taskIds: string[]; // порядок задач в колонке
}

export interface KanbanState {
tasks: Record<string, Task>; // нормализованный словарь задач
columns: Record<ColumnId, Column>; // колонки по ID
columnOrder: ColumnId[]; // порядок отображения колонок
}

export interface AddTaskPayload {
columnId: ColumnId;
title: string;
}

export interface MoveTaskPayload {
taskId: string;
from: ColumnId;
to: ColumnId;
}

export type KanbanAction =
| { type: "ADD_TASK"; payload: AddTaskPayload }
| { type: "MOVE_TASK"; payload: MoveTaskPayload }
| { type: "UPDATE_TASK"; payload: { taskId: string; updates: Partial<Task> } }
| { type: "LOAD_STATE"; payload: KanbanState }
| { type: "DELETE_TASK"; payload: { taskId: string; columnId: ColumnId } };
------end----------

------src/tests/jest.setup.ts----------
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// 🔧 Фикс для react-router-dom в Jest-окружении
// Используем globalThis + any, чтобы TS не ругался на переназначение
(globalThis as any).TextEncoder = TextEncoder;
(globalThis as any).TextDecoder = TextDecoder;
--------end---------

--------src/styles/global.css----------
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import "./variables.css";

/_ FIX: Только классы, глобальный сброс _/
.global-box-fix {
box-sizing: border-box;
}
_,
_::before,
\*::after {
box-sizing: inherit;
}

html,
body,
#root {
height: 100%;
font-family: var(--font-family);
background-color: var(--color-bg-root);
margin: 0;
padding: 0;
}

#root {
display: flex;
flex-direction: column;
min-height: 100vh;
position: relative;
}

main {
flex: 1;
width: 100%;
max-width: var(--max-width-container);
margin: 0 auto;
overflow-y: auto;
position: relative;
display: flex;
flex-direction: column;
}

@media (max-width: 768px) {
.header {
display: none;
}
.footer {
display: none;
}
main {
max-width: 100%;
}
}
--------end---------

-------src/styles/variables.css--------
:root {
/_ Layout _/
--max-width-container: 1235px;
--header-height: 55px;
--footer-height: 55px;

/_ Colors _/
--color-bg-root: #0079bf;
--color-bg-header: #0067a3;
--color-bg-footer: #0067a3;
--color-bg-menu: #0079bf;
--color-text-white: #ffffff;
--color-border-white: #ffffff;

/_ Typography _/
--font-family: "Roboto", -apple-system, BlinkMacSystemFont, sans-serif;
--font-size-title: 28px;
--font-size-status: 18px;
--font-weight-regular: 400;
--line-height-compact: 100%;

/_ Spacing & Dimensions _/
--spacing-title-left: 14px;
--spacing-footer-status-left: 21px;
--spacing-footer-owner-right: 19px;
--spacing-menu-right: 16px;
--status-gap: 36px;

--user-menu-width: 64px;
--user-menu-height: 40px;
--avatar-size: 40px;
--arrow-container-size: 24px;
--arrow-down-width: 12px;
--arrow-down-height: 7.42px;
}
--------end--------

---------src/services/storage.ts----------
// src/services/storage.ts
import { KanbanState } from "../types";

const STORAGE_KEY = "kanban-state-v1";

export const loadState = (): KanbanState | null => {
try {
const raw = localStorage.getItem(STORAGE_KEY);
return raw ? (JSON.parse(raw) as KanbanState) : null;
} catch (error) {
console.warn("Failed to load state from localStorage:", error);
return null;
}
};

export const saveState = (state: KanbanState): void => {
try {
localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
} catch (error) {
console.warn("Failed to save state to localStorage:", error);
}
};
----------end -----------

-----src/pages/HomePage.tsx--------
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
-------end----------

--------src/pages/TaskDetailPage.tsx-------
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
aria-label="Close" >
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
onClick={() => setIsEditing(true)} >
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
--------------end------------

------src/pages/TaskDetailPage.module.css---------
/_ FIX: Растягивание на весь main _/
.container {
background: #ffffff;
border-radius: 8px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
position: relative;
box-sizing: border-box;

/_ ✅ Точные отступы по ТЗ _/
margin: 22px 28px 20px 26px;

/_ ✅ Растягиваем до низа: занимаем всё доступное место в <main> _/
flex: 1;
min-height: 0; /_ Защита от переполнения flex-контейнера _/
}

@media (max-width: 768px) {
.container {
/_ ✅ Mobile: ≤768px _/
margin: 157px 21px 157px 35px;
}
}

.closeBtn {
position: absolute;
top: 16px;
right: 16px;
background: none;
border: none;
font-size: 28px;
cursor: pointer;
color: #5e6c84;
line-height: 1;
padding: 4px;
transition: color 0.15s;
}

.closeBtn:hover {
color: #172b4d;
}

.title {
margin: 22px 28px 35px 28px;
font-family: "Roboto", sans-serif;
font-weight: 500;
font-size: 28px;
color: #172b4d;
padding-right: 40px;
}

.descriptionBlock {
flex: 1;
display: flex;
flex-direction: column;
}

.descriptionText {
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 16px;
cursor: pointer;
padding: 16px 30px;
border-radius: 4px;
min-height: 40px;
transition: background 0.15s;
white-space: pre-wrap;
}

.descriptionText:hover {
background: #ebecf0;
}

.textarea {
width: 100%;
flex: 1;
padding: 16px;
font-family: "Roboto", sans-serif;
font-size: 16px;
line-height: 1.5;
border: 1px solid #dfe1e6;
border-radius: 4px;
resize: none;
outline: none;
background: #ffffff;
box-sizing: border-box;
}

.textarea:focus {
border-color: #4c9aff;
box-shadow: 0 0 0 2px rgba(76, 154, 255, 0.2);
}

/_ ✅ МОБИЛЬНАЯ АДАПТАЦИЯ ДЕТАЛЬНОЙ СТРАНИЦЫ _/
@media (max-width: 768px) {
.container {
margin-top: 50px;
margin-bottom: 50px;
}

.descriptionText {
background-color: #ffffff; /_ ✅ Белая заливка вместо серой _/
}

.textarea {
background-color: #ffffff; /_ ✅ На случай, если используется режим редактирования _/
}
}
--------end--------

-----src/context/KanbanContext.tsx-------
import React, {
createContext,
useContext,
useReducer,
useEffect,
useCallback,
ReactNode,
} from "react";
import { ColumnId, Task } from "../types"; // Проверь путь, если типы лежат в ../types

export interface KanbanState {
columns: Record<ColumnId, { id: ColumnId; title: string }>;
tasks: Record<string, Task>;
columnOrder: ColumnId[];
}

type Action =
| { type: "ADD_TASK"; payload: { columnId: ColumnId; title: string } }
| {
type: "MOVE_TASK";
payload: { taskId: string; from: ColumnId; to: ColumnId };
}
| {
type: "UPDATE_TASK";
payload: { taskId: string; updates: Partial<Pick<Task, "description">> };
};

const STORAGE_KEY = "kanban-state-v1";

// Пустая структура по умолчанию (без тестовых задач)
const defaultState: KanbanState = {
columns: {
backlog: { id: "backlog", title: "Backlog" },
ready: { id: "ready", title: "Ready" },
"in-progress": { id: "in-progress", title: "In Progress" },
finished: { id: "finished", title: "Finished" },
},
tasks: {},
columnOrder: ["backlog", "ready", "in-progress", "finished"],
};

// --- Reducer ---
export const kanbanReducer = (
state: KanbanState,
action: Action,
): KanbanState => {
switch (action.type) {
case "ADD_TASK": {
const newTaskId = `task-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
const newTask: Task = {
id: newTaskId,
title: action.payload.title,
description: "",
columnId: action.payload.columnId,
};
return { ...state, tasks: { ...state.tasks, [newTaskId]: newTask } };
}
case "MOVE_TASK": {
const { taskId, to } = action.payload;
const task = state.tasks[taskId];
if (!task) return state;
return {
...state,
tasks: { ...state.tasks, [taskId]: { ...task, columnId: to } },
};
}
case "UPDATE_TASK": {
const { taskId, updates } = action.payload;
const task = state.tasks[taskId];
if (!task) return state;
return {
...state,
tasks: { ...state.tasks, [taskId]: { ...task, ...updates } },
};
}
default:
return state;
}
};

// --- Context ---
interface KanbanContextType {
state: KanbanState;
dispatch: React.Dispatch<Action>;
getTasksByColumn: (columnId: ColumnId) => Task[];
}

const KanbanContext = createContext<KanbanContextType | null>(null);

// --- Provider ---
export const KanbanProvider = ({ children }: { children: ReactNode }) => {
// ✅ Ленивая инициализация: читаем localStorage ТОЛЬКО при первом рендере
const loadState = (): KanbanState => {
try {
const raw = localStorage.getItem(STORAGE_KEY);
return raw ? JSON.parse(raw) : defaultState;
} catch {
return defaultState;
}
};

const [state, dispatch] = useReducer(kanbanReducer, undefined, loadState);

// ✅ Автоматическое сохранение при ЛЮБОМ изменении state
// ✅ Сохранение в localStorage с обработкой ошибок
useEffect(() => {
console.log(
"🔄 [KanbanContext] State изменился. Текущие задачи:",
state.tasks,
);

    try {
      const serialized = JSON.stringify(state);
      localStorage.setItem(STORAGE_KEY, serialized);
      // Для отладки можно раскомментировать:
      // console.log("Saved to localStorage:", state);
      console.log("✅ [LocalStorage] Сохранено успешно! Ключ:", STORAGE_KEY);
      console.log(
        "💾 [LocalStorage] Размер данных:",
        serialized.length,
        "символов",
      );
    } catch (error) {
      console.error("❌ Failed to save to localStorage:", error);
    }

}, [state]); // Зависимость только от state

const getTasksByColumn = useCallback(
(columnId: ColumnId) =>
Object.values(state.tasks).filter((task) => task.columnId === columnId),
[state.tasks],
);

return (
<KanbanContext.Provider value={{ state, dispatch, getTasksByColumn }}>
{children}
</KanbanContext.Provider>
);
};

// --- Hook ---
export const useKanban = () => {
const context = useContext(KanbanContext);
if (!context)
throw new Error("useKanban must be used within a KanbanProvider");
return context;
};
-----------end-----------

---------src/context/**tests**/KanbanReducer.test.js------
import { kanbanReducer, KanbanState } from "../KanbanContext";
import { ColumnId, Task } from "../../types";

describe("kanbanReducer", () => {
const initialState: KanbanState = {
columns: {
backlog: { id: "backlog", title: "Backlog" },
ready: { id: "ready", title: "Ready" },
"in-progress": { id: "in-progress", title: "In Progress" },
finished: { id: "finished", title: "Finished" },
},
tasks: {},
columnOrder: ["backlog", "ready", "in-progress", "finished"],
};

test("ADD_TASK добавляет задачу в tasks с правильным columnId", () => {
const action = {
type: "ADD_TASK" as const,
payload: { columnId: "backlog" as ColumnId, title: "Тестовая задача" },
};

    const newState = kanbanReducer(initialState, action);

    const taskIds = Object.keys(newState.tasks);
    expect(taskIds).toHaveLength(1);

    const task = newState.tasks[taskIds[0]];
    expect(task.title).toBe("Тестовая задача");
    expect(task.columnId).toBe("backlog");
    expect(task.description).toBe("");
    // ✅ localStorage проверяется в интеграционных тестах, не в чистом редюсере

});

test("MOVE_TASK меняет columnId у существующей задачи", () => {
const taskId = "task-test-123";
const stateWithTask: KanbanState = {
...initialState,
tasks: {
[taskId]: {
id: taskId,
title: "Задача А",
columnId: "backlog",
description: "",
} as Task,
},
};

    const action = {
      type: "MOVE_TASK" as const,
      payload: { taskId, from: "backlog" as ColumnId, to: "ready" as ColumnId },
    };

    const newState = kanbanReducer(stateWithTask, action);
    expect(newState.tasks[taskId].columnId).toBe("ready");
    expect(newState.tasks[taskId].title).toBe("Задача А"); // Проверяем, что остальное не сломалось

});

test("UPDATE_TASK обновляет description задачи", () => {
const taskId = "task-update-test";
const stateWithTask: KanbanState = {
...initialState,
tasks: {
[taskId]: {
id: taskId,
title: "Задача Б",
columnId: "ready",
description: "Старое описание",
} as Task,
},
};

    const action = {
      type: "UPDATE_TASK" as const,
      payload: {
        taskId,
        updates: { description: "Новое описание после правки" },
      },
    };

    const newState = kanbanReducer(stateWithTask, action);
    expect(newState.tasks[taskId].description).toBe(
      "Новое описание после правки",
    );
    expect(newState.tasks[taskId].title).toBe("Задача Б");

});

test("неизвестный action возвращает состояние без изменений", () => {
const newState = kanbanReducer(initialState, { type: "UNKNOWN" as any });
expect(newState).toBe(initialState); // Проверка на неизменность (immutability не требуется, но поведение корректно)
});
});
-----------end--------------

---------src/components/layout/Footer/Footer.tsx-------
import React from "react";
// ✅ Идём на 2 уровня вверх (layout/ -> components/), потом в context
import { useKanban } from "../../../context/KanbanContext";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
const { state } = useKanban();
const activeCount = Object.values(state.tasks).filter(
(t) => t.columnId === "backlog",
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
-------------end------------

-----src/componets/layout/Footer/Footer.module.css----------
/_ src/components/layout/Footer/Footer.module.css _/
.footer {
width: 100%;
max-width: var(--max-width-container); /_ 1235px из макета _/
height: var(--footer-height);
background-color: var(--color-bg-footer);

/_ ✅ Центрируем по горизонтали: 0 сверху/снизу, auto слева/справа _/
margin: 0 auto;

display: flex;
align-items: center;
justify-content: space-between;
}

.statusList {
list-style: none;
display: flex;
align-items: center;
margin-left: var(--spacing-footer-status-left);
gap: var(--status-gap);
}

.statusItem,
.ownerText {
font-family: var(--font-family);
font-weight: var(--font-weight-regular);
font-size: var(--font-size-status);
color: var(--color-text-white);
line-height: var(--line-height-compact);
letter-spacing: 0;
}

.ownerText {
margin-right: var(--spacing-footer-owner-right);
}

@media (max-width: 768px) {
.footer {
display: none; /_ Скрываем футер по ТЗ _/
}
}
------------end-----------

---------src/components/layout/Header/Header.tsx-------
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
---------end-----------

----src/components/layout/Header/Header.module.css---
.header {
width: 100%;
max-width: var(--max-width-container);
height: var(--header-height);
background-color: var(--color-bg-header);
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
z-index: 50;
}

.titleWrapper {
height: 45px;
margin-left: var(--spacing-title-left);
display: flex;
align-items: center;
}

.titleText {
font-family: var(--font-family);
font-weight: var(--font-weight-regular);
font-size: var(--font-size-title);
color: var(--color-text-white);
line-height: var(--line-height-compact);
letter-spacing: 0;
}

/_ ✅ FIX: На мобильном хедер сливается с main, заголовок скрывается, меню остаётся _/
@media (max-width: 768px) {
.header {
background-color: var(--color-bg-root); /_ #0079BF _/
height: 50px;
justify-content: flex-end;
padding: 0 16px;
}
.titleWrapper {
display: none;
}
}
-----------end----------

----src/components/UserMenu/UserMenu.module.css---
.userMenu {
position: relative;
width: var(--user-menu-width);
/_height: var(--user-menu-height);_/
width: fit-content;
background-color: var(--color-bg-header);
margin: 7px var(--spacing-menu-right) 8px auto;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px;
flex-shrink: 0; /_ ✅ Запрещаем сжатие _/
}

.trigger {
width: 100%;
height: 100%;
background: none;
border: none;
display: flex;
align-items: center;
justify-content: center;
gap: 0;
cursor: pointer;
padding: 0 2px;
flex-shrink: 0; /_ ✅ Запрещаем сжатие кнопки _/
}

.avatarCircle {
width: 40px;
height: 40px;
border: 2px solid var(--color-border-white);
background-color: var(--color-border-white);
border-radius: 50%; /_ ✅ Круг всегда _/
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
flex-shrink: 0; /_ ✅ Запрещаем сжатие _/
}

.avatarInner {
width: 26.2px;
height: 33.44px;
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;
}

.avatarImg {
width: 100%;
height: 100%;
object-fit: cover;
display: block;
transform: translateY(2px); /_ Твой сдвиг вниз _/
}

.arrowBlock {
width: 24px;
height: 24px;
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0; /_ ✅ Запрещаем сжатие _/
margin-left: 4px; /_ Небольшой отступ от аватара _/
}

.arrowDown {
width: 12px;
height: 7.42px;
transition: transform 0.2s ease; /_ Плавный поворот стрелки _/
}

/_ ✅ Стрелка вверх при открытом меню _/
.arrowDown.open {
transform: rotate(180deg);
}

/_ 2. Меню привязано к правому краю аватара _/
.dropdown {
position: absolute;
/_ ✅ Центрируем блок относительно аватара _/
left: -83%;
top: calc(100% + 7px);

width: 134px;
min-height: 60px;
background: #ffffff;
border: 1px solid #e0e0e0;
border-radius: 4px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
z-index: 100;
list-style: none;
padding: 8px 0;
margin: 0;
}

/_ ✅ ТОЛЬКО ОДИН треугольник (жёстко привязан к центру) _/
.dropdown::after {
content: "";
position: absolute;
top: -6px;
left: calc(50% + 30px);
transform: translateX(-50%);
width: 0;
height: 0;
border-left: 6px solid transparent;
border-right: 6px solid transparent;
border-bottom: 6px solid #ffffff; /_ Цвет фона меню _/
pointer-events: none;
z-index: 101;
}

.dropdown li {
padding: 8px 16px;
cursor: pointer;
color: #333;
font-size: 14px;
transition: background 0.15s;
}

.dropdown li:hover {
background-color: #f5f7fa;
text-decoration: underline;
}

.trigger {
padding: 4px;
gap: 8px; /_ Чуть больше отступ между аватаром и стрелкой _/
}

.avatarCircle {
width: 36px; /_ Чуть компактнее на мобильном _/
height: 36px;
}

.arrowBlock {
margin-left: 8px;
}

.dropdown {
right: 0;
top: calc(100% + 4px);
}

/_ ✅ Мобильная адаптация: только позиционирование, без ломки структуры _/
@media (max-width: 768px) {
.userMenu {
/_ Убираем margin, позиционируем через родителя (Header) _/
margin: 0 9px 0 0;
background: transparent; /_ Сливается с хедером _/
width: auto;
height: auto;
}
}

/_ ✅ Мобильная адаптация (чтобы меню было 9px от края экрана) _/
@media (max-width: 768px) {
.dropdown {
left: -85%; /_ ✅ Отступ самого меню от края экрана _/
}

.trigger {
padding: 4px;
gap: 8px;
}
.avatarCircle {
width: 36px;
height: 36px;
}
.arrowBlock {
margin-left: 8px;
}
}
---------end----------

----src/components/UserMenu/UserMenu.tsx---
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
type="button" >
{/_ ✅ Аватар с инлайн-стилями и фолбэком _/}
<div className={styles.avatarWrapper}>
<img
src="./img/user-avatar.svg"
alt="User avatar"
className={styles.avatarImg}
onError={(e) => {
const target = e.target as HTMLImageElement;
target.style.display = "none";
if (target.parentElement) {
target.parentElement.style.background = "#0079bf";
target.parentElement.textContent = "A";
target.parentElement.style.color = "#fff";
target.parentElement.style.fontSize = "18px";
target.parentElement.style.fontWeight = "bold";
target.parentElement.style.display = "flex";
target.parentElement.style.alignItems = "center";
target.parentElement.style.justifyContent = "center";
}
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
-----------end---------------

-------src/feature/kanban/AddCardForm.module.css-------
/_ ✅ Контейнер формы: гарантируем, что селект и крестик в одной строке _/
.formLi {
width: 100%;
min-width: 0; /_ ✅ Ключевое: разрешает сжатие flex-элемента _/
margin: 0;
padding: 8px;
background: #ffffff;
border-radius: 5px;
box-sizing: border-box;
list-style: none;
display: flex;
align-items: center;
justify-content: space-between;
gap: 8px;
overflow: hidden; /_ ✅ Обрезает всё, что пытается вылезти _/
}

/_ ✅ Футерная кнопка + Add card _/
.addButton {
width: 100%;
background: transparent;
border: none;
padding: 8px 0;
cursor: pointer;
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 18px;
color: #5e6c84;
text-align: left;
transition: color 0.15s;
}

.addButton:hover:not(:disabled) {
color: #172b4d;
text-decoration: underline;
}

.addButton:disabled {
color: #a5adba !important;
cursor: not-allowed !important;
}

/_ ✅ Поле ввода для Backlog _/
.newTaskInput {
flex: 1;
background: transparent;
border: none;
outline: none;
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 100%;
color: #172b4d;
box-sizing: border-box;
padding: 2px 0;
}

.actions {
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 4px;
}

/_ ✅ Кнопка Submit (только для Backlog) _/
.submitBtn {
background-color: #0079bf;
color: #ffffff;
border: none;
border-radius: 4px;
padding: 6px 16px;
font-size: 14px;
font-weight: 500;
cursor: pointer;
transition: background-color 0.2s;
}

.submitBtn:hover {
background-color: #0052cc;
}

/_ ✅ Крестик отмены: всегда видим и кликабелен _/
.cancelBtn {
background: none;
border: none;
font-size: 20px;
color: #5e6c84;
cursor: pointer;
padding: 4px 8px;
flex-shrink: 0; /_ ✅ Не сжимается, даже если текст длинный _/
line-height: 1;
display: flex;
align-items: center;
}

.cancelBtn:hover {
color: #172b4d;
}

/_ ✅ Селект для перемещения задач: гарантируем стрелку на всех браузерах _/
.taskDropdown {
flex: 1 1 0%; /_ ✅ Явно задаёт базу 0%, игнорируя длину текста _/
min-width: 0; /_ ✅ Разрешает сжатие внутри flex-контейнера _/
background: transparent;
border: none;
outline: none;
font-family: "Roboto", sans-serif;
font-size: 14px;
color: #172b4d;
cursor: pointer;
padding: 4px 20px 4px 0;
appearance: menulist;
-webkit-appearance: menulist;
-moz-appearance: menulist;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis; /_ ✅ Длинные названия задач аккуратно обрежутся _/
}
------------end------------

-------src/feature/kanban/AddCardForm.tsx-------
import React, { useRef, useEffect } from "react";
import { Task } from "../../types";
import styles from "./AddCardForm.module.css";

interface AddCardFormProps {
isBacklog: boolean;
inputValue: string;
onInputChange: (val: string) => void;
sourceTasks: Task[];
onSelectTask: (id: string) => void;
onClose: () => void;
}

const AddCardForm: React.FC<AddCardFormProps> = ({
isBacklog,
inputValue,
onInputChange,
sourceTasks,
onSelectTask,
onClose,
}) => {
const inputRef = useRef<HTMLInputElement>(null);
const selectRef = useRef<HTMLSelectElement>(null);

useEffect(() => {
if (inputRef.current) inputRef.current.focus();
if (selectRef.current) selectRef.current.focus();
}, []);

const handleKeyDown = (e: React.KeyboardEvent) => {
if (e.key === "Enter" && isBacklog) {
// Enter в инпуте можно обработать, если нужно, но сабмит теперь в футере
e.preventDefault();
}
if (e.key === "Escape") onClose();
};

return (

<li className={styles.formLi}>
{isBacklog ? (
<input
ref={inputRef}
className={styles.newTaskInput}
value={inputValue}
onChange={(e) => onInputChange(e.target.value)}
onKeyDown={handleKeyDown}
placeholder="**************\_\_**************"
/>
) : (
<select
ref={selectRef}
className={styles.taskDropdown}
defaultValue=""
onChange={(e) => onSelectTask(e.target.value)} >
<option value="" disabled>
Move task...
</option>
{sourceTasks.map((task) => (
<option key={task.id} value={task.id}>
{task.title}
</option>
))}
</select>
)}
<button type="button" className={styles.cancelBtn} onClick={onClose}>
×
</button>
</li>
);
};

export default AddCardForm;
-----------end------------

-------src/feature/kanban/Column.tsx-------
import React, { useState, useEffect, useRef } from "react";
import { useKanban } from "../../context/KanbanContext";
import { ColumnId } from "../../types";
import TaskCard from "./TaskCard";
import AddCardForm from "./AddCardForm";
import styles from "./Column.module.css";

interface ColumnProps {
columnId: ColumnId;
title: string;
}

const sourceMap: Record<ColumnId, ColumnId | null> = {
backlog: null,
ready: "backlog",
"in-progress": "ready",
finished: "in-progress",
};

const Column: React.FC<ColumnProps> = ({ columnId, title }) => {
const { state, dispatch } = useKanban();

// ✅ Получаем задачи через фильтрацию из общего стейта (гарантирует реактивность)
const tasks = Object.values(state.tasks).filter(
(t) => t.columnId === columnId,
);

const isBacklog = columnId === "backlog";
const sourceId = sourceMap[columnId];

// ✅ Источник задач для перемещения (пересчитывается при любом изменении стейта)
const sourceTasks = sourceId
? Object.values(state.tasks).filter((t) => t.columnId === sourceId)
: [];

const [isFormOpen, setIsFormOpen] = useState(false);
const [inputValue, setInputValue] = useState("");
const listRef = useRef<HTMLUListElement>(null);

useEffect(() => {
if (isFormOpen && listRef.current) {
listRef.current.parentElement?.scrollTo({
top: 9999,
behavior: "smooth",
});
}
}, [isFormOpen]);

const toggleForm = () => setIsFormOpen(!isFormOpen);
const closeForm = () => {
setIsFormOpen(false);
setInputValue("");
};

const handleAddTask = () => {
if (inputValue.trim().length === 0) return;
dispatch({
type: "ADD_TASK",
payload: { columnId: "backlog", title: inputValue.trim() },
});
closeForm();
};

const handleMoveTask = (taskId: string) => {
if (!taskId) return;
const from = sourceMap[columnId];
if (from) {
dispatch({ type: "MOVE_TASK", payload: { taskId, from, to: columnId } });
closeForm();
}
};

// ✅ Явное условие: кнопка дизейблена, если не бэклог И в источнике нет задач
const isAddButtonDisabled = !isBacklog && sourceTasks.length === 0;

return (

<section className={styles.column}>
<h2 className={styles.columnTitle}>{title}</h2>

      <div className={styles.scrollArea}>
        <ul className={styles.columnList} ref={listRef}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}

          {isFormOpen && (
            <AddCardForm
              isBacklog={isBacklog}
              inputValue={inputValue}
              onInputChange={setInputValue}
              sourceTasks={sourceTasks}
              onSelectTask={handleMoveTask}
              onClose={closeForm}
            />
          )}
        </ul>
      </div>

      {/* ✅ ФУТЕР: Кнопка с корректным disabled */}
      <footer className={styles.columnFooter}>
        {isBacklog && isFormOpen ? (
          <button
            className={styles.submitBtn}
            type="button"
            onClick={handleAddTask}
            disabled={inputValue.trim().length === 0}
          >
            Submit
          </button>
        ) : (
          <button
            className={styles.addButton}
            type="button"
            onClick={toggleForm}
            disabled={isAddButtonDisabled} // ✅ Ключевая строка
          >
            + Add card
          </button>
        )}
      </footer>
    </section>

);
};

export default Column;
-----------end-------------

-------src/feature/kanban/Column.module.css-------
/_ ✅ Колонка: высота зависит от реального контента _/
.column {
width: min(282px, calc(100% - 32px));
min-width: 280px;
/_height: auto; /_ ✅ Убрали 100% → колонка сжимается под задачи _/
min-height: 180px; /_ ✅ Сохраняет серый фон, даже если задач 0 */
margin: 0 0 auto 0;
padding: 8px 4px 0 4px;
background-color: #ebecf0;
border-radius: 10px;
display: flex;
flex-direction: column;
flex-shrink: 0;
box-sizing: border-box;
overflow-x: hidden;
/*align-self: flex-start;\*/
}

/_ ✅ ОДИН .columnFooter (объединил конфликтующие дубли) _/
.columnFooter {
width: 100%;
height: 29px;
margin: 15px 0 8px 0;
padding: 0 4px;
display: flex;
align-items: center;
justify-content: space-between;
flex-shrink: 0;
gap: 8px;
}

.columnTitle {
width: calc(100% - 24px);
height: 17px;
margin: 12px 12px 15px 12px;
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 100%;
letter-spacing: 0;
text-align: left;
color: #000000;
box-sizing: border-box;
flex-shrink: 0; /_ ✅ Заголовок не сжимается _/
}

/_ ✅ Область задач: НЕ растягивает колонку, скролл только при превышении лимита _/
.scrollArea {
flex: 0 0 auto;
/_height: auto; /_ ✅ Убрали flex: 1 → больше не тянет колонку _/
min-height: 0; /_ ✅ Защита от переполнения _/
max-height: 583px; /_ ✅ Скролл появляется только если задач много \*/
margin: 0 12px;
display: flex;
flex-direction: column;
gap: 15px;
overflow-y: auto;
overflow-x: hidden;
padding-right: 4px;
}

.columnList {
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
gap: 15px;
}

/_ Кастомный скроллбар (сохранён твой) _/
.scrollArea::-webkit-scrollbar {
width: 12px;
background: transparent;
}

.scrollArea::-webkit-scrollbar-track {
background: transparent;
border-radius: 6px;
}

.scrollArea::-webkit-scrollbar-thumb {
width: 12px;
height: 52px;
background-color: #cbcbcb;
border-radius: 6px;
border: 2px solid transparent;
background-clip: padding-box;
}

.scrollArea::-webkit-scrollbar-thumb:hover {
background-color: #a8a8a8;
}

/_ ✅ МОБИЛЬНАЯ АДАПТАЦИЯ (сохранена твоя логика) _/
@media (max-width: 768px) {
.column {
width: 100%;
margin: 0;
border-radius: 8px;
height: auto;
min-height: auto;
}

.columnTitle {
font-size: 16px;
margin: 10px 10px 15px 10px;
}

.scrollArea {
margin: 0 10px;
max-height: 45vh; /_ ✅ Ограничение высоты на мобильных оставлено _/
}

.columnFooter {
margin: 12px 10px 8px;
}
}

.addButton {
width: 100%;
background: transparent;
border: none;
padding: 0;
cursor: pointer;
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 18px;
color: #5e6c84;
text-align: left;
transition: color 0.15s;
}
.addButton:hover {
color: #172b4d;
text-decoration: underline;
}

.submitBtn {
background-color: #0079bf;
color: #fff;
border: none;
border-radius: 4px;
padding: 6px 16px;
font-size: 14px;
font-weight: 500;
cursor: pointer;
transition: background-color 0.2s;
}
.submitBtn:hover {
background-color: #0052cc;
}
.cancelBtn {
background: none;
border: none;
font-size: 20px;
color: #5e6c84;
cursor: pointer;
padding: 4px 8px;
}
.cancelBtn:hover {
color: #172b4d;
}
--------end-------------

-------src/feature/kanban/KanbanBoard.module.css-------
.mainContent {
width: 1200px;
margin: 20px 16px auto 19px; /_ Оставлено строго по ТЗ _/
display: flex;
gap: 24px;
align-items: flex-start;
flex-wrap: nowrap;
}

.mainContent {
width: 1200px;
margin: 20px 16px auto 19px;
display: flex;
gap: 24px;
align-items: flex-start;
flex-wrap: nowrap;
}

@media (max-width: 768px) {
.mainContent {
width: 100%;
margin: 0;
/_ Верх 57, Право 35, Низ 50, Лево 21 _/
padding: 57px 35px 50px 21px;
flex-direction: column;
gap: 24px; /_ расстояние между колонками _/
align-items: stretch;
box-sizing: border-box;
}
}
------------end---------------

------src/feature/kanban/KanbanBoard.tsx-------
import React from "react";
import { useKanban } from "../../context/KanbanContext";
import Column from "./Column";
import styles from "./KanbanBoard.module.css";

const KanbanBoard: React.FC = () => {
const { state } = useKanban();

return (

<section className={styles.mainContent}>
{state.columnOrder.map((colId) => {
const column = state.columns[colId];
return (
<Column key={column.id} columnId={column.id} title={column.title} />
);
})}
</section>
);
};

export default KanbanBoard;
----------end---------------

------src/feature/kanban/TaskCard.module.css-------
.card {
width: 100%; /_ ✅ Растягиваем на всю ширину контейнера _/
max-width: 100%;
height: fit-content;
background-color: #ffffff;
border-radius: 5px;
padding: 7px 9px 7px 8px;
list-style: none;
cursor: pointer;
box-sizing: border-box; /_ ✅ Учитываем padding в ширине _/
transition:
box-shadow 0.15s ease,
transform 0.15s ease;
}

.card:hover {
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
transform: translateY(-1px);
}

.cardTitle {
margin: 0;
font-family: "Roboto", sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 100%;
letter-spacing: 0;
text-align: left;
color: #000000;
overflow-wrap: break-word;
}

@media (max-width: 768px) {
.card {
width: 100%; /_ Растягиваем на всю ширину колонки _/
box-sizing: border-box; /_ Чтобы padding не вызывал горизонтальный скролл _/
}
}
---------end--------------

------src/feature/kanban/TaskCard.tsx-------
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
---------end--------------

------src/feature/kanban/**tests**/AddCardForm.tsx-------
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddCardForm from '../AddCardForm';

const defaultProps = {
isBacklog: true,
inputValue: '',
onInputChange: jest.fn(),
sourceTasks: [],
onSelectTask: jest.fn(),
onClose: jest.fn(),
};

describe('AddCardForm', () => {
beforeEach(() => jest.clearAllMocks());

test('рендерит инпут с подчеркиваниями для Backlog', () => {
render(<AddCardForm {...defaultProps} />);
expect(screen.getByPlaceholderText(/******\*\*******\_\_******\*\*******/)).toBeInTheDocument();
});

test('вызывает onInputChange при вводе текста', () => {
render(<AddCardForm {...defaultProps} />);
const input = screen.getByRole('textbox');
fireEvent.change(input, { target: { value: 'Новая задача' } });
expect(defaultProps.onInputChange).toHaveBeenCalledWith('Новая задача');
});

test('вызывает onClose при клике на крестик', () => {
render(<AddCardForm {...defaultProps} />);
fireEvent.click(screen.getByText('×'));
expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
});
});
-------------end------------

------src/feature/kanban/**tests**/TaskCard.tsx-------
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TaskCard from "../TaskCard";
import { Task } from "../../../types";

const mockTask: Task = {
id: "1",
title: "Проверить тестирование",
description: "",
columnId: "backlog",
};

describe("TaskCard", () => {
test("корректно рендерит заголовок задачи", () => {
render(
<MemoryRouter>
{" "}
{/_ ✅ Оборачиваем в Router для useNavigate _/}
<TaskCard task={mockTask} />
</MemoryRouter>,
);
expect(screen.getByText(/Проверить тестирование/)).toBeInTheDocument();
});

test("карточка имеет корректные атрибуты", () => {
render(
<MemoryRouter>
<TaskCard task={mockTask} />
</MemoryRouter>,
);
const card = screen.getByText(/Проверить тестирование/).closest("li");
expect(card).toHaveAttribute("class");
});
});
-----------end-----------
