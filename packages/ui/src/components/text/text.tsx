import { createElement, type FC } from "react";
import type { TextProps, TextVariant } from "./text.types";
import clsx from "clsx";
import styles from "./text.module.scss";

const defaultTag: Record<TextVariant, "h1" | "h2" | "h3" | "p" | "span"> = {
  "heading-1": "h1",
  "heading-2": "h2",
  "heading-3": "h3",
  paragraph: "p",
  caption: "span",
};

const variantClass: Record<TextVariant, string | undefined> = {
  "heading-1": styles.heading1,
  "heading-2": styles.heading2,
  "heading-3": styles.heading3,
  paragraph: styles.paragraph,
  caption: styles.caption,
};

export const Text:FC<TextProps> = ({ variant = "paragraph", className, children, ...props })=>  {
  return createElement(
    defaultTag[variant],
    { ...props, className: clsx(styles.text, variantClass[variant], className) },
    children,
  );
}
