"use client";
import { Select as BaseSelect } from "@base-ui/react/select";
import clsx from "clsx";
import { useId } from "react";
import styles from "./select.module.scss";
import type { SelectOption, SelectProps } from "./select.types";

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M3.5 8.5l3 3 6-7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Select = <T extends SelectOption = SelectOption>({
  options,
  renderOption,
  label,
  "aria-label": ariaLabel,
  placeholder = "Выберите значение",
  error,
  className,
  triggerClassName,
  popupClassName,
  itemClassName,
  ...rootProps
}: SelectProps<T>) => {
  const errorId = useId();

  return (
    <div className={clsx(styles.field, className)}>
      <BaseSelect.Root items={options} {...rootProps}>
        {label && (
          <BaseSelect.Label className={styles.label}>{label}</BaseSelect.Label>
        )}
        <BaseSelect.Trigger
          className={clsx(styles.trigger, triggerClassName)}
          aria-label={label ? undefined : ariaLabel}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
        >
          <BaseSelect.Value
            className={styles.value}
            placeholder={placeholder}
          />
          <BaseSelect.Icon className={styles.icon}>
            <ChevronIcon />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner
            className={styles.positioner}
            sideOffset={4}
            alignItemWithTrigger={false}
          >
            <BaseSelect.Popup className={clsx(styles.popup, popupClassName)}>
              <BaseSelect.List className={styles.list}>
                {options.map((option) => (
                  <BaseSelect.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={clsx(styles.item, itemClassName)}
                  >
                    <BaseSelect.ItemIndicator className={styles.itemIndicator}>
                      <CheckIcon />
                    </BaseSelect.ItemIndicator>
                    <BaseSelect.ItemText className={styles.itemText}>
                      {renderOption ? renderOption(option) : option.label}
                    </BaseSelect.ItemText>
                  </BaseSelect.Item>
                ))}
              </BaseSelect.List>
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
      {error && (
        <p id={errorId} role="alert" className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
};
