"use client";
import clsx from "clsx";
import styles from "./button.module.scss";

export function Button() {
  console.log(styles);
  return (
    <>
      <button className={styles.button}>asfasf</button>
      <button className={clsx(styles.button, styles.isSecondary)}>
        <span className={styles.buttonText}>asfasf</span>
      </button>
    </>
  );
}
