// Моковые данные для демо Accordion на странице /ui-kit. Нужны только для
// демонстрации компонента, в приложении не используются.

// Иконка-информация для демо `icon` в заголовке секции.
const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 7.5V11M8 5v.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Своя иконка раскрытия для демо пропа `chevronIcon`.
export const triangleIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M4 6h8l-4 5-4-5z" />
  </svg>
);

// Секции для демо Accordion: с иконкой, с длинным заголовком (проверка
// переноса на узком экране) и отключённая.
export const accordionOptions = [
  {
    value: "description",
    title: "Описание задачи",
    icon: <InfoIcon />,
    content: "Общая информация о задаче: что нужно сделать и зачем.",
  },
  {
    value: "criteria",
    title: "Критерии приёмки и условия, при которых задача считается готовой",
    content: "Компонент проверен в браузере на десктопе и мобильной ширине.",
  },
  {
    value: "history",
    title: "История изменений",
    content: "Журнал изменений по задаче.",
  },
  {
    value: "archive",
    title: "Архив",
    content: "Недоступно",
    disabled: true,
  },
];
