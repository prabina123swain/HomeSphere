/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors: {
          
          },
          fontSize: {
            'fs-5': '1.125rem', // Custom font size
          },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
};
