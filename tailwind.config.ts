import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        boxShadow: {
          custom: '0 4px 16px 0 rgba(0, 0, 0, 0.04)'
        },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      typography: {
        
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: '#f5f5f5',
              padding: '1em',
              borderRadius: '0.5em',
              overflowX: 'auto',
            },
            code: {
              backgroundColor: '#f5f5f5',
              padding: '0.2em 0.4em',
              borderRadius: '0.3em',
              fontSize: '0.875em',
            },
          },
        },
      }
    },
  },
  plugins: [typography],
};
export default config;
