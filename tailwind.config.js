/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue-500': '#1E3A8A', // Dark blue
        'light-blue-500': '#3B82F6', // Light blue
        'dark-blue-300': '#3B82F6', // Lighter dark blue
        'light-blue-100': '#DBEAFE', // Very light blue
      },
    },
  },
  plugins: [],
};
