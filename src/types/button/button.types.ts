import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

const buttonVariants = cva(
  ['cursor-pointer', 'hover:opacity-80', 'flex', 'items-center', 'gap-5'],
  {
    variants: {
      variant: {
        primary: [
          'border border-black transition duration-300 ease-out hover:bg-black hover:text-white',
        ],
        error: [
          'border border-red text-red transition duration-300 ease-out hover:bg-red hover:text-white',
        ],
      },
      size: {
        sm: ['px-3', 'py-2', 'text-sm'],
        md: ['px-6', 'py-3', 'text-xl', 'min-w-[500px]'],
        lg: ['px-8', 'py-3', 'text-xl', 'min-w-full'],
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
  },
);

type ButtonProps = React.ComponentPropsWithRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode;
  };

type SpanProps = React.ComponentPropsWithRef<'span'> &
  VariantProps<typeof buttonVariants> & {
    as?: 'span';
    children?: ReactNode;
    onClick?: never;
  };

export { type ButtonProps, type SpanProps, buttonVariants };
