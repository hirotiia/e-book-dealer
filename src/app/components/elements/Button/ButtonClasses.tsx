import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const button = cva(['cursor-pointer', 'hover:opacity-80', 'flex', 'items-center', 'gap-5'], {
  variants: {
    variant: {
      primary: ['border', 'border-blue-500', 'bg-blue-500', 'text-white'],
      secondary: ['border', 'border-gray-500', 'bg-gray-500', 'text-white'],
    },
    size: {
      sm: ['px-2', 'py-1', 'text-xs'],
      md: ['px-4', 'py-2', 'text-sm'],
      lg: ['px-6', 'py-3', 'text-lg'],
    },
    disabled: {
      true: ['cursor-not-allowed', 'opacity-50'],
    },
    rounded: {
      true: ['rounded'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    rounded: true,
  },
});

type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof button> & {
    children?: ReactNode;
  };

type SpanProps = React.ComponentPropsWithRef<'span'> &
  VariantProps<typeof button> & {
    as?: 'span';
    children?: ReactNode;
    onClick?: never;
  };

export { type ButtonProps, type SpanProps, button };
