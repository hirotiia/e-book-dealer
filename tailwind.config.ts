/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#ffffff',
      black: '#333333',
      blue: '#007FFF',
      gray: '#ececec',
      'gray-light': '#d3dce6',
      'gray-dark': '#37474f',
      red: '#bf0000',
    },
    fontFamily: {
      notoJP: ['var(--font-notojp)'],
      openSans: ['var(--font-opensans)'],
    },
    extend: {
      transitionDuration: {
        '300': '0.3s',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        custom: 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      opacity: {
        '6': '0.6',
      },
    },
  },
  plugins: [],
};
export default config;
