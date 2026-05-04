# 🗂️ Алгоритм разработки Kanban-проекта на React + TypeScript

---

## 📋 Этап 0: Подготовка репозитория и окружения

```bash
# 1. Создаём проект с TypeScript-шаблоном
npx create-react-app kanban-board --template typescript

# 2. Устанавливаем зависимости
npm install react-router-dom uuid
npm install -D @types/uuid

# 3. Инициализируем Git и настраиваем .gitignore
git init
# Проверяем, что node_modules/ в .gitignore

# 4. Создаём структуру папок (предварительно)
src/
├── components/          # Переиспользуемые UI-компоненты
├── features/           # Фичи: KanbanBoard, TaskCard, Column
├── pages/              # Страницы: HomePage, TaskDetailPage
├── services/           # localStorage, utils
├── types/              # TypeScript интерфейсы
├── styles/             # Глобальные стили, миксины
├── hooks/              # Кастомные хуки
├── tests/              # Тесты для ключевых компонентов
├── App.tsx
├── index.tsx
└── setupTests.ts       # Настройка тестового окружения
```

---

## 🧱 Этап 1: Проектирование архитектуры компонентов

### 🎯 Декомпозиция по принципу "разделяй и властвуй"

```
App
├── Header
│   └── UserMenu (avatar + dropdown)
├── Main
│   └── KanbanBoard
│       ├── Column (x4: Backlog, Ready, InProgress, Finished)
│       │   ├── ColumnHeader (title + task count)
│       │   ├── TaskList
│       │   │   └── TaskCard (draggable)
│       │   └── AddCardButton / AddCardForm
│       └── DragDropContext (опционально, или нативный HTML5 DnD)
├── Footer
│   └── TaskStats (active/finished counts)
└── TaskDetailPage (отдельный роут)
```

### 📦 Типы данных (`src/types/index.ts`)

```typescript
export interface Task {
  id: string;
  title: string;
  description?: string;
  createdAt: number;
}

export type ColumnId = "backlog" | "ready" | "in-progress" | "finished";

export interface Column {
  id: ColumnId;
  title: string;
  taskIds: string[]; // порядок задач
}

export interface KanbanState {
  tasks: Record<string, Task>; // нормализованная структура
  columns: Record<ColumnId, Column>;
  columnOrder: ColumnId[];
}
```

> 💡 Нормализованная структура упростит перемещение задач и обновление в localStorage.

---

## 🎨 Этап 2: Вёрстка и стилизация (BEM + CSS Modules)

### Подход к стилям (с учётом твоего предпочтения):

- **BEM-классы** для основных блоков: `.kanban-board`, `.column`, `.task-card`
- **CSS Modules** для сложных/состоятельных компонентов: `TaskCard.module.css`, `UserMenu.module.css`
- **Глобальные переменные** в `src/styles/variables.css`: цвета, шрифты, брейкпоинты

### Семантическая разметка:

```html
<!-- Пример структуры -->
<header>...</header>
<main class="kanban-board">
  <section class="column" aria-labelledby="backlog-title">
    <h2 id="backlog-title">Backlog</h2>
    <ul class="task-list" role="list">
      ...
    </ul>
    <button class="add-card-btn" disabled>＋ Add card</button>
  </section>
</main>
<footer>...</footer>
```

### Адаптивность:

- Мобильная версия в том же Figma — используем `@media (max-width: 768px)`
- Горизонтальный скролл колонок на мобильных или вертикальный стек (по макету)

---

## ⚙️ Этап 3: Базовая функциональность (без localStorage)

### 3.1 Mock-данные и контекст

```typescript
// src/services/mockData.ts
export const initialData: KanbanState = { ... }

// src/context/KanbanContext.tsx
// Создаём KanbanProvider с useReducer + localStorage sync (позже)
```

### 3.2 Компоненты первого уровня:

1. **Column** — отображает заголовок, список задач, кнопку добавления
2. **TaskCard** — кликабельный заголовок → переход на `/tasks/:id`
3. **AddCardForm** — controlled input + валидация (не пустое название)

### 3.3 Логика добавления задачи:

```typescript
// Псевдокод обработчика
const handleAddTask = (columnId: ColumnId, title: string) => {
  if (!title.trim()) return; // валидация

  const newTask: Task = {
    id: uuidv4(),
    title: title.trim(),
    createdAt: Date.now(),
  };

  dispatch({ type: "ADD_TASK", payload: { columnId, task: newTask } });
};
```

### 3.4 Перемещение задач (упрощённо, без DnD сначала):

- Кнопка "+ Add card" в `Ready` открывает `<select>` с задачами из `Backlog`
- Выбор задачи → `dispatch({ type: 'MOVE_TASK', from: 'backlog', to: 'ready', taskId })`
- Кнопка неактивна, если `sourceColumn.taskIds.length === 0`

> ✅ Сначала реализуем через dropdown, потом можно добавить HTML5 Drag-and-Drop как улучшение.

---

## 💾 Этап 4: Persist-слой с localStorage

### Сервис `src/services/storage.ts`:

```typescript
const STORAGE_KEY = "kanban-state-v1";

export const loadState = (): KanbanState | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const saveState = (state: KanbanState): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};
```

### Интеграция с контекстом:

```typescript
// В KanbanProvider
useEffect(() => {
  const saved = loadState();
  if (saved) dispatch({ type: "LOAD_STATE", payload: saved });
}, []);

useEffect(() => {
  saveState(state);
}, [state]); // автосохранение при любых изменениях
```

---

## 🧭 Этап 5: Роутинг и детализация задачи

### Настройка React Router (`src/App.tsx`):

```typescript
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/tasks/:taskId" element={<TaskDetailPage />} />
</Routes>
```

### TaskDetailPage:

- Получаем `taskId` через `useParams()`
- Находим задачу в состоянии контекста
- Отображаем:
  - Заголовок (не редактируемый)
  - Описание: `<textarea>` или `contentEditable` с обработкой `onBlur`/`onChange`
  - Кнопка закрытия → `navigate('/')`

### Редактирование описания:

```typescript
// Вариант 1: по клику переключаем режим редактирования
const [isEditing, setIsEditing] = useState(false);

{isEditing ? (
  <textarea
    value={description}
    onChange={e => updateTaskDescription(taskId, e.target.value)}
    onBlur={() => setIsEditing(false)}
    autoFocus
  />
) : (
  <p onClick={() => setIsEditing(true)}>
    {description || 'This task has no description'}
  </p>
)}
```

---

## 🧪 Этап 6: Тестирование ключевых компонентов

### Используем Jest + React Testing Library:

```bash
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### Пример теста для `AddCardForm.test.tsx`:

```typescript
test('не добавляет задачу с пустым названием', async () => {
  const user = userEvent.setup();
  render(<AddCardForm onSubmit={mockSubmit} />);

  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: /submit/i });

  await user.click(button); // пустой ввод
  expect(mockSubmit).not.toHaveBeenCalled();
});

test('добавляет задачу при валидном названии', async () => {
  const user = userEvent.setup();
  render(<AddCardForm onSubmit={mockSubmit} />);

  await user.type(screen.getByRole('textbox'), 'New task');
  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(mockSubmit).toHaveBeenCalledWith('New task');
});
```

### Что тестировать в первую очередь:

1. `AddCardForm` — валидация, отправка
2. `TaskCard` — клик → навигация
3. `UserMenu` — toggle dropdown, hover-эффекты
4. `KanbanContext` — редюсер (отдельные кейсы перемещения/добавления)

---

## 🎯 Этап 7: Финализация и полировка

### ✅ Чеклист перед сдачей:

- [ ] Все 4 колонки отображаются с моковыми данными
- [ ] Добавление задачи работает с валидацией
- [ ] Перемещение через dropdown (и/или DnD) обновляет обе колонки
- [ ] Изменения сохраняются в localStorage, переживают перезагрузку
- [ ] Детальная страница открывается по `/tasks/:id`, описание редактируется
- [ ] Футер показывает актуальное количество задач в Backlog/Finished
- [ ] UserMenu: стрелка меняет направление, ховер-эффекты на пунктах
- [ ] Кнопка "+ Add card": disabled-состояние визуально отличается
- [ ] Адаптив: проверка на ширине 320px, 768px, 1200px
- [ ] Семантика: `<header>`, `<main>`, `<footer>`, `<button>`, `<section>`
- [ ] CSS: только классы, нет селекторов по тегу/id
- [ ] TypeScript: нет `any`, интерфейсы для props/state
- [ ] Код: стрелочные функции, деструктуризация, модульные импорты
- [ ] Тесты: минимум 3-4 ключевых компонента покрыты
- [ ] `.gitignore` содержит `node_modules/`, `.env`, `*.log`

### 🚀 Деплой (опционально, но плюсик):

```bash
npm run build
# Загрузить на GitHub Pages, Vercel или Netlify
```

---

## 🔄 Альтернативные улучшения (после MVP)

| Улучшение                         | Сложность | Польза                               |
| --------------------------------- | --------- | ------------------------------------ |
| **HTML5 Drag-and-Drop API**       | ⭐⭐⭐    | Более интуитивное перемещение        |
| **React Beautiful DnD**           | ⭐⭐⭐⭐  | Анимации, доступность, но лишний вес |
| **Оптимистичные обновления**      | ⭐⭐      | Мгновенный отклик интерфейса         |
| **Debounced save в localStorage** | ⭐        | Меньше записей при частых изменениях |
| **Темная тема**                   | ⭐⭐      | По желанию, через CSS-variables      |

---

## 📁 Рекомендуемая файловая структура (итог)

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   └── Button.test.tsx
│   ├── UserMenu/
│   │   ├── UserMenu.tsx
│   │   ├── UserMenu.module.css
│   │   └── UserMenu.test.tsx
│   └── ...
├── features/
│   ├── kanban/
│   │   ├── KanbanBoard.tsx
│   │   ├── Column.tsx
│   │   ├── TaskCard.tsx
│   │   ├── AddCardForm.tsx
│   │   └── hooks/
│   │       └── useTaskMove.ts
│   └── task-detail/
│       └── TaskDetailPage.tsx
├── pages/
│   ├── HomePage.tsx
│   └── NotFoundPage.tsx
├── services/
│   ├── storage.ts
│   ├── mockData.ts
│   └── utils.ts
├── context/
│   └── KanbanContext.tsx
├── types/
│   └── index.ts
├── styles/
│   ├── variables.css
│   ├── reset.css
│   └── global.css
├── hooks/
│   └── useLocalStorage.ts
├── tests/
│   ├── setup.ts
│   └── mocks/
├── App.tsx
├── index.tsx
└── setupTests.ts
```

---

## 🛠️ Советы по реализации с учётом твоих предпочтений

1. **CSS**: Используй `TaskCard.module.css` для локальных стилей + `.task-card__title` (BEM) для глобальных утилит.
2. **Git**: Создавай ветки `feature/add-task`, `feature/task-detail`, `fix/localstorage-sync` — так удобнее ревью и откат.
3. **AI-интеграция**: Если будешь генерировать код через агента — проси сразу писать в файлы, как ты предпочитаешь.
4. **VS Code**: Настрой сниппеты для `rfce` (React FC с экспортом) и `bem-class` для ускорения вёрстки.
5. **Тесты**: Начни с `AddCardForm` — там чёткая бизнес-логика, легко тестировать.

---

## 🗓️ Примерный таймлайн (при 2-3 часа/день)

| День | Задача                                             |
| ---- | -------------------------------------------------- |
| 1    | Настройка проекта, структура, типы, mock-данные    |
| 2    | Вёрстка колонок + TaskCard, базовые стили          |
| 3    | Логика добавления задачи + валидация               |
| 4    | Перемещение задач (dropdown), обновление состояния |
| 5    | localStorage интеграция, тесты на контекст         |
| 6    | Роутинг + TaskDetailPage, редактирование описания  |
| 7    | Футер, UserMenu, адаптив, полировка стилей         |
| 8    | Тесты компонентов, рефакторинг, подготовка к сдаче |

---
