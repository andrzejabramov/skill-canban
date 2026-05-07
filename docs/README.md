# 📋 Awesome Kanban Board

Интерактивная Kanban-доска для управления задачами. Создана с использованием React, TypeScript и CSS Modules. Полностью адаптивна, данные сохраняются в `localStorage`, проект задеплоен на GitHub Pages.

🔗 **Демо:** https://andrzejabramov.github.io/skill-canban/  
📂 **Репозиторий:** https://github.com/andrzejabramov/skill-canban

---

## ✨ Реализованный функционал

- ✅ [**4 колонки:**](/img/screen-1.png) Backlog → Ready → In Progress → Finished
- ✅ [**Создание задач**](/img/screen-2.png) в колонке Backlog
- ✅ [**Перемещение задач**](/img/screen-3.png) между колонками (последовательно, из предыдущей в текущую)
- ✅ [**Детальный просмотр**](/img/screen-4.png) задачи с редактированием описания
- ✅ [**Визуальная блокировка**](/img/screen-5.png) кнопки `+ Add card`, если в источнике нет задач
- ✅ [**UserMenu**](/img/screen-6.png) с выпадающим списком и SVG-аватаром (соответствует макету Figma)
- ✅ [**Адаптивная вёрстка**](/img/screen-7.png) (Desktop + Mobile ≤768px)
- ✅ [**Сохранение состояния**](/img/screen-8.png) в `localStorage` с восстановлением при перезагрузке
- ✅ **TypeScript** (строгая типизация, 0 ошибок компиляции)
- ✅ [**Юнит-тесты**](/img/screen-9.png) (9 тестов, Jest + React Testing Library)

---

## 🛠️ Стек технологий

| Категория     | Инструменты                  |
| ------------- | ---------------------------- |
| Frontend      | React 19, React Router v7    |
| Язык          | TypeScript 4.9               |
| Стилизация    | CSS Modules, CSS Variables   |
| Тестирование  | Jest, React Testing Library  |
| Сборка/Деплой | Create React App, `gh-pages` |
| Хранение      | `localStorage`               |

---

## 🚀 Запуск проекта

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/andrzejabramov/skill-canban.git
cd skill-canban

# 2. Установите зависимости
npm install

# 3. Запустите локальный сервер
npm start

# Откройте http://localhost:3000
```

---

## 🧪 Тестирование

```bash
# Запуск всех тестов
npm test

# Запуск без watch-режима
npm test -- --watchAll=false
```

Все 9 тестов проверяют: редюсер состояния, рендер формы добавления задач, рендер карточки задачи.

---

## 📦 Сборка и деплой

```bash
# Сборка продакшн-версии
npm run build

# Деплой на GitHub Pages
npm run deploy
```

Проект настроен на работу в подпапке (`homepage` в `package.json`), пути к ассетам генерируются автоматически.

---

## 📁 Структура проекта

```
src/
├── components/layout/  # Header, Footer
├── components/UserMenu/ # Аватар + выпадающее меню
├── context/            # KanbanProvider, редюсер, стейт-менеджмент
├── features/kanban/    # Column, TaskCard, AddCardForm
├── pages/              # HomePage, TaskDetailPage
├── styles/             # Глобальные стили и CSS-переменные
├── tests/              # Настройка Jest
└── types.ts            # TypeScript-интерфейсы
```

---

## 👤 Автор

**Andrzej Abramov**  
🔗 [GitHub](https://github.com/andrzejabramov)

---

_Проект выполнен в рамках учебного задания._

```

```
