'use client';

import { ButtonProps, SpanProps, buttonVariants } from '@/types/button/button.types';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { XOR } from 'ts-xor';

type CombinedProps = XOR<ButtonProps, SpanProps>;

export const Button = ({ as, className, children, ...rest }: CombinedProps) => {
  const buttonClassName = twMerge(buttonVariants(rest), className);

  return as !== 'span' ? (
    <button className={buttonClassName} {...(rest as ButtonProps)}>
      {children}
    </button>
  ) : (
    <span className={buttonClassName} {...(rest as SpanProps)}>
      {children}
    </span>
  );
};
