module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'background-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',
        'text-light': 'var(--text-light)',
        'text-dark': 'var(--text-dark)',
        'subtext-light': 'var(--subtext-light)',
        'subtext-dark': 'var(--subtext-dark)',
        'surface-light': 'var(--surface-light)',
        'surface-dark': 'var(--surface-dark)',
        'border-light': 'var(--border-light)',
        'border-dark': 'var(--border-dark)',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}