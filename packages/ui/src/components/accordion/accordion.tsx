"use client";
import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import clsx from "clsx";
import styles from "./accordion.module.scss";
import type { AccordionProps } from "./accordion.types";
import { ChevronIcon } from "./chevron-icon";

export const Accordion = ({
  options,
  size = "md",
  chevronIcon = <ChevronIcon />,
  className,
  itemClassName,
  triggerClassName,
  panelClassName,
  ...rootProps
}: AccordionProps) => (
  <BaseAccordion.Root<string>
    className={clsx(styles.root, className)}
    data-size={size}
    {...rootProps}
  >
    {options.map((option) => (
      <BaseAccordion.Item
        key={option.value}
        value={option.value}
        disabled={option.disabled}
        className={clsx(styles.item, itemClassName)}
      >
        <BaseAccordion.Header className={styles.header}>
          <BaseAccordion.Trigger
            className={clsx(styles.trigger, triggerClassName)}
          >
            {option.icon ? (
              <span className={styles.icon} aria-hidden>
                {option.icon}
              </span>
            ) : null}
            <span className={styles.title}>{option.title}</span>
            {chevronIcon ? (
              <span className={styles.chevron} aria-hidden>
                {chevronIcon}
              </span>
            ) : null}
          </BaseAccordion.Trigger>
        </BaseAccordion.Header>
        <BaseAccordion.Panel className={styles.panel}>
          <div className={clsx(styles.content, panelClassName)}>
            {option.content}
          </div>
        </BaseAccordion.Panel>
      </BaseAccordion.Item>
    ))}
  </BaseAccordion.Root>
);
