'use client';
import clsx from 'clsx';
import styles from './button.module.scss';
import type { ButtonProps } from './types';
import { sizeStylesMap, variantStylesMap } from './style-maps';

export const Button = ({ variant = 'primary', size = 'm', isLoading = false, leftIcon, rightIcon, type = 'button', className, children, disabled, ...props }: ButtonProps) => {
  return (
    <button type={type} disabled={disabled || isLoading} className={clsx(styles.button, variantStylesMap.get(variant), sizeStylesMap.get(size), className)} {...props}>
      {leftIcon && (
        <span aria-hidden='true' className={styles.icon}>
          {leftIcon}
        </span>
      )}
      <span className={styles.text}>{children}</span>
      {rightIcon && (
        <span aria-hidden='true' className={styles.icon}>
          {rightIcon}
        </span>
      )}
    </button>
  );
};
