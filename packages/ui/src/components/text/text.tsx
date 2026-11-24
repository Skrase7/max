import type { TextProps } from "./text.types";
import { variantStyleMap } from "./style-maps";
import clsx from "clsx";
import styles from "./text.module.scss";
import type { FC } from "react";

export const Text:FC<TextProps> = ({ variant = "paragraph", as, className, children, ...props }) => {
  const Tag = as ?? "div";

  return (
    <Tag {...props} className={clsx(styles.text, variantStyleMap.get(variant), className)}>
      {children}
    </Tag>
  );
}
