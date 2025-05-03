import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
        poppins: ['var(--font-poppins)'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            h1: {
              fontFamily: 'var(--font-playfair)',
            },
            h2: {
              fontFamily: 'var(--font-playfair)',
            },
            h3: {
              fontFamily: 'var(--font-playfair)',
            },
            p: {
              fontFamily: 'var(--font-poppins)',
            },
            a: {
              color: '#fff',
              '&:hover': {
                color: '#fff',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config; 