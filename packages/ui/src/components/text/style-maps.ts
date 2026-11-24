import type { TextVariant } from "./text.types";
import styles from "./text.module.scss";

export const variantStyleMap = new Map<TextVariant, string | null>([
  ["heading-1", styles.heading1 ?? null],
  ["heading-2", styles.heading2 ?? null],
  ["heading-3", styles.heading3 ?? null],
  ["paragraph", styles.paragraph ?? null],
  ["caption", styles.caption ?? null],
]);
