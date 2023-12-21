/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{html,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        green: '#6FCF97',   // Light green
        darkBlue: '#081C31', // Dark blue
        white: '#FFFFFF',    // White
      },
    },
  },
  variants: {},
  plugins: [],
};
