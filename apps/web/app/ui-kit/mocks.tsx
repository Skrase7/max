// Моковые данные для страницы /ui-kit. Нужны только для демонстрации
// компонентов, в реальных данных приложения не используются.

// Иконка-звезда для демо `renderOption` в Select: показывает, что в пункт
// можно положить любой JSX.
const StarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden
  >
    <path d="M8 1.5l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2 .7-4.3-3.1-3 4.3-.6L8 1.5z" />
  </svg>
);

// Вкладки для демо Tabs. `content` — содержимое панели, `icon` и `badge` —
// иконка и счётчик в самой вкладке, `disabled` — вкладка недоступна
// (проверка неактивного состояния).
export const tabOptions = [
  {
    value: "overview",
    label: "Обзор",
    icon: <StarIcon />,
    content: "Общая информация о задаче.",
  },
  {
    value: "comments",
    label: "Комментарии",
    badge: 3,
    content: "Список комментариев.",
  },
  { value: "history", label: "История", content: "Журнал изменений." },
  { value: "archive", label: "Архив", content: "Недоступно", disabled: true },
];

// Пункты для демо Select. Поля `hint` и `icon` — свои, не из SelectOption:
// они доступны в `renderOption`. Пункт с `disabled` проверяет неактивное
// состояние.
export const selectOptions = [
  {
    value: "todo",
    label: "К выполнению",
    hint: "Новые задачи",
    icon: <StarIcon />,
  },
  { value: "progress", label: "В работе", hint: "Кто-то уже делает" },
  { value: "review", label: "На ревью", hint: "Недоступно", disabled: true },
  { value: "done", label: "Готово", hint: "Закрыто" },
];
