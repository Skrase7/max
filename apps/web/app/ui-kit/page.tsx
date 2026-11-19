"use client";
// Страница для просмотра компонентов UI kit.
import { Select } from "@repo/ui";

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

const options = [
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

export default function UiKitPage() {
  return (
    <main style={{ maxWidth: 360, padding: 24 }}>
      <Select
        label="Статус"
        options={options}
        renderOption={(o) => (
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {o.icon}
            <span style={{ display: "grid" }}>
              {o.label}
              <small style={{ color: "#616061" }}>{o.hint}</small>
            </span>
          </span>
        )}
      />
    </main>
  );
}
