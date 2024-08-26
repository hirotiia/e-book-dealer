import { ReactNode } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const button = cva(['cursor-pointer', 'hover:opacity-80'], {
  variants: {
    valiant: {
      primary: ['border', 'border-blue-500', 'bg-blue-500', 'text-white'],
      secondary: ['border', 'border-gray-500', 'bg-gray-500', 'text-white'],
    },
    size: {
      small: ['px-2', 'py-1', 'text-xs'],
      medium: ['px-4', 'py-2', 'text-sm'],
      large: ['px-6', 'py-3', 'text-lg'],
    },
    disabled: {
      true: ['cursor-not-allowed', 'opacity-50'],
    },
    rounded: {
      true: ['rounded'],
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
});

type Props = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof button> & {
    children?: ReactNode;
  };

export const Button = ({ className, children, ...rest }: Props) => {
  const buttonClassName = twMerge(button(rest), className);
  return (
    <button className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};
