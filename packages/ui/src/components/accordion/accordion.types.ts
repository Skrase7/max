import type { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import type { ComponentProps, ReactNode } from "react";

export interface AccordionOption {
  /** Идентификатор секции. `value` должны быть уникальными (используются как key). */
  value: string;
  /** Заголовок секции. Рендерится внутри кнопки, поэтому без ссылок и кнопок. */
  title: ReactNode;
  /** Содержимое раскрытой секции. */
  content: ReactNode;
  /** Декоративная иконка перед заголовком. */
  icon?: ReactNode;
  disabled?: boolean;
}

export type AccordionSize = "sm" | "md" | "lg";

/**
 * Открытые секции всегда задаются массивом (`value`, `defaultValue`,
 * `onValueChange`), в том числе без `multiple`.
 */
export interface AccordionProps extends Omit<
  ComponentProps<typeof BaseAccordion.Root<string>>,
  "children" | "className" | "orientation" | "loopFocus"
> {
  options: readonly AccordionOption[];
  /** Высота заголовка, отступы и размер текста. По умолчанию "md". */
  size?: AccordionSize;
  /**
   * Своя иконка раскрытия вместо стрелки, общая для всех секций. У открытой
   * секции она поворачивается на 180°. `null` убирает иконку.
   */
  chevronIcon?: ReactNode;
  /** Класс обёртки. */
  className?: string;
  itemClassName?: string;
  triggerClassName?: string;
  /** Класс блока с содержимым внутри раскрывающейся панели. */
  panelClassName?: string;
}
