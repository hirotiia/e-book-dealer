import { button, type ButtonProps } from './ButtonClasses';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Button = ({ as, className, children, ...rest }: ButtonProps) => {
  const buttonClassName = twMerge(button(rest), className);
  return as !== 'span' ? (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  ) : (
    <span className={buttonClassName} {...rest}>
      {children}
    </span>
  );
};
