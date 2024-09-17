/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          'dark-background': '#0a192f',
          'dark-text': '#ffffff',
        },
      },
    },
  },
  plugins: [],
}
