/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#C33A1b',

          secondary: '#1CFDFF',

          accent: '#3D4451',

          neutral: '#191D24',

          'base-100': '#141526',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },

  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],
};
