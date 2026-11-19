"use client";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import clsx from "clsx";
import styles from "./tabs.module.scss";
import type { TabsOption, TabsProps } from "./tabs.types";

export const Tabs = <T extends TabsOption = TabsOption>({
  options,
  value,
  defaultValue,
  onValueChange,
  renderTab,
  variant = "underline",
  size = "md",
  fullWidth = false,
  "aria-label": ariaLabel,
  activateOnFocus = false,
  keepMounted = false,
  className,
  listClassName,
  tabClassName,
  panelClassName,
  ...rootProps
}: TabsProps<T>) => (
  <BaseTabs.Root
    value={value}
    defaultValue={defaultValue}
    onValueChange={
      onValueChange &&
      ((next) => {
        // Base UI может вернуть null, если нет ни одной доступной вкладки.
        if (next !== null) onValueChange(String(next));
      })
    }
    className={clsx(styles.root, className)}
    data-variant={variant}
    data-size={size}
    data-full-width={fullWidth ? "" : undefined}
    {...rootProps}
  >
    <BaseTabs.List
      className={clsx(styles.list, listClassName)}
      aria-label={ariaLabel}
      activateOnFocus={activateOnFocus}
    >
      {options.map((option) => (
        <BaseTabs.Tab
          key={option.value}
          value={option.value}
          disabled={option.disabled}
          className={clsx(styles.tab, tabClassName)}
        >
          {renderTab ? (
            renderTab(option)
          ) : (
            <>
              {option.icon && (
                <span className={styles.icon}>{option.icon}</span>
              )}
              {option.label}
              {option.badge != null && (
                <span className={styles.badge}>{option.badge}</span>
              )}
            </>
          )}
        </BaseTabs.Tab>
      ))}
      <BaseTabs.Indicator className={styles.indicator} />
    </BaseTabs.List>
    {options.map(
      (option) =>
        option.content !== undefined && (
          <BaseTabs.Panel
            key={option.value}
            value={option.value}
            keepMounted={keepMounted}
            className={clsx(styles.panel, panelClassName)}
          >
            {option.content}
          </BaseTabs.Panel>
        ),
    )}
  </BaseTabs.Root>
);
