import type { Select as BaseSelect } from "@base-ui/react/select";
import type { ComponentProps, ReactNode } from "react";

export interface SelectOption {
  /** Значение — только строка. `value` должны быть уникальными (используются как key). */
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Поддерживается только одиночный выбор (`multiple` не принимается).
 */
export interface SelectProps<
  T extends SelectOption = SelectOption,
> extends Omit<
  ComponentProps<typeof BaseSelect.Root<string>>,
  "items" | "children" | "multiple"
> {
  /** Пункты. Можно добавлять любые свои поля, они попадут в `renderOption`. */
  options: readonly T[];
  /**
   * Свой вид пункта. По умолчанию выводится `option.label`.
   * Функцию можно передать только из клиентского компонента ("use client"),
   * из серверного компонента Next.js она не пройдёт.
   */
  renderOption?: (option: T) => ReactNode;
  /** Видимая подпись над полем. */
  label?: string;
  /**
   * Невидимое имя поля для скринридера. Передавайте, если `label` не задан.
   */
  "aria-label"?: string;
  placeholder?: string;
  error?: string;
  /** Класс обёртки. */
  className?: string;
  triggerClassName?: string;
  popupClassName?: string;
  itemClassName?: string;
}
