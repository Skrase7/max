import type { TextVariant } from "./text.types";
import styles from "./text.module.scss";

export const variantStyleMap = new Map<TextVariant, string | undefined>([
  ["heading-1", styles.heading1],
  ["heading-2", styles.heading2],
  ["heading-3", styles.heading3],
  ["paragraph", styles.paragraph],
  ["caption", styles.caption],
]);
