import type { Tabs as BaseTabs } from "@base-ui/react/tabs";
import type { ComponentProps, ReactNode } from "react";

export interface TabsOption {
  /** Значение — только строка. `value` должны быть уникальными (используются как key). */
  value: string;
  /** Текст вкладки. */
  label: string;
  /** Иконка слева от текста. */
  icon?: ReactNode;
  /** Счётчик или метка справа от текста (например, число комментариев). */
  badge?: ReactNode;
  /** Содержимое панели. Если не задано, панель не выводится. */
  content?: ReactNode;
  disabled?: boolean;
}

export type TabsVariant = "underline" | "segmented";
export type TabsSize = "sm" | "md" | "lg";

export interface TabsProps<T extends TabsOption = TabsOption> extends Omit<
  ComponentProps<typeof BaseTabs.Root>,
  "children" | "value" | "defaultValue" | "onValueChange" | "orientation"
> {
  /** Вкладки. Можно добавлять любые свои поля, они попадут в `renderTab`. */
  options: readonly T[];
  /** Активная вкладка (управляемый режим). */
  value?: string;
  /** Вкладка по умолчанию (неуправляемый режим). По умолчанию первая доступная. */
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /**
   * Свой вид вкладки. По умолчанию выводится `option.label`.
   * Функцию можно передать только из клиентского компонента ("use client"),
   * из серверного компонента Next.js она не пройдёт.
   */
  renderTab?: (option: T) => ReactNode;
  /**
   * Имя набора вкладок для скринридера. Передавайте, если рядом нет
   * видимого заголовка.
   */
  "aria-label"?: string;
  /**
   * Переключать вкладку сразу при фокусе стрелками.
   * Если `false`, стрелки только двигают фокус, а выбор — Enter / пробел.
   * @default false
   */
  activateOnFocus?: boolean;
  /** Не размонтировать неактивные панели (сохраняет их состояние). */
  keepMounted?: boolean;
  /**
   * Вид: `underline` — подчёркивание, `segmented` — переключатель в общей рамке.
   * @default "underline"
   */
  variant?: TabsVariant;
  /**
   * Размер. `sm` (36px) — для плотных десктопных интерфейсов, ниже
   * рекомендованных 44px для касания.
   * @default "md"
   */
  size?: TabsSize;
  /** Растянуть список на всю ширину, вкладки делят её поровну. */
  fullWidth?: boolean;
  /** Класс обёртки. */
  className?: string;
  listClassName?: string;
  tabClassName?: string;
  panelClassName?: string;
}
