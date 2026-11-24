import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./select";

const options = [
  { value: "todo", label: "К выполнению" },
  { value: "progress", label: "В работе" },
  { value: "done", label: "Готово" },
];

const meta = {
  title: "UI/Select",
  component: Select,
  args: {
    label: "Статус задачи",
    placeholder: "Выберите статус",
    options,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "280px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "grid", gap: "24px" }}>
      <Select label="Обычный" placeholder="Выберите статус" options={options} />
      <Select
        label="Выбранное значение"
        options={options}
        defaultValue="progress"
      />
      <Select label="Отключённое поле" options={options} disabled />
      <Select label="Ошибка" options={options} error="Выберите статус задачи" />
      <Select
        label="Недоступный пункт"
        options={[options[0], { ...options[1], disabled: true }, options[2]]}
      />
    </div>
  ),
};


export const Default: Story = {};

export const Selected: Story = {
  args: {
    defaultValue: "progress",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: "Выберите статус задачи",
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      options[0],
      { ...options[1], disabled: true },
      options[2],
    ],
  },
};