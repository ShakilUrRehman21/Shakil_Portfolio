/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF7F2',
          100: '#F4EFEA',
          200: '#ECE7DF',
          300: '#DFD8CC',
        },
        forest: {
          600: '#276749',
          700: '#1E6548',
          800: '#174E37',
        }
      },
      fontFamily: {
        doodle: ['var(--font-patrick)', 'Patrick Hand', 'Caveat', 'cursive'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
};
