/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'purple': '#4C70EF',
      'blue': '#292C36',
      'light-blue': '#558FFF',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'banner-pattern': "url('/src/assets/bg-image.png')",
      },
    },
  },
  plugins: [],
}

