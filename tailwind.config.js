
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgb(var(--background) / <alpha-value>)',
        'foreground': 'rgb(var(--foreground) / <alpha-value>)',

        'card': 'rgb(var(--card) / <alpha-value>)',
        'card-foreground': 'rgb(var(--card-foreground) / <alpha-value>)',

        'primary': 'rgb(var(--primary) / <alpha-value>)',
        'primary-foreground': 'rgb(var(--primary-foreground) / <alpha-value>)',
        'primary-hover': 'rgb(var(--primary-hover) / <alpha-value>)',

        'secondary': 'rgb(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'rgb(var(--secondary-foreground) / <alpha-value>)',
        'secondary-hover': 'rgb(var(--secondary-hover) / <alpha-value>)',

        'accent': 'rgb(var(--accent) / <alpha-value>)',
        'border': 'rgb(var(--border) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};