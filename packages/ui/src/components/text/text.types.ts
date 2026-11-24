import type { HTMLAttributes } from "react";

export type TextVariant =
  "heading-1" | "heading-2" | "heading-3" | "paragraph" | "caption";

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: keyof HTMLElementTagNameMap;
}
