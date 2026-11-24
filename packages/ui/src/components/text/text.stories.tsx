import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./text";

const meta = {
  title: "UI/Text",
  component: Text,
  args: {
    children: "Пример текста",
    variant: "paragraph",
    as: "p",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["heading-1", "heading-2", "heading-3", "paragraph", "caption"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "grid", gap: "16px" }}>
      <Text variant="heading-1" as="h1">
        Пример заголовка h1
      </Text>
      <Text variant="heading-2" as="h2">
        Пример заголовка h2
      </Text>
      <Text variant="heading-3" as="h3">
        Пример заголовка h3
      </Text>
      <Text variant="paragraph" as="p">
        Пример параграфа
      </Text>
      <Text variant="caption" as="span">
        Пример подписи
      </Text>
    </div>
  ),
};

export const Heading1: Story = {
  args: {
    variant: "heading-1",
    as: "h1",
    children: "Пример заголовка h1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "heading-2",
    as: "h2",
    children: "Пример заголовка h2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "heading-3",
    as: "h3",
    children: "Пример заголовка h3",
  },
};

export const Paragraph: Story = {
  args: {
    variant: "paragraph",
    children: "Пример параграфа",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    as: "span",
    children: "Пример подписи",
  },
};
