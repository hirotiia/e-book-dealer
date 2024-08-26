import { button, type SpanProps, type ButtonProps } from './ButtonClasses';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type CombinedProps = ButtonProps | SpanProps;

export const Button = ({ as, className, children, ...rest }: CombinedProps) => {
  const buttonClassName = twMerge(button(rest), className);
  const Comp = as !== 'span' ? 'button' : 'span';
  return (
    <Comp className={buttonClassName} {...rest}>
      {children}
    </Comp>
  );
};
