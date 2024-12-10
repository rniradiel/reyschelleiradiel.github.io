/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-pattern': "url('/src/assets/bg-image.png')",
      },
    },
  },
  plugins: [],
}

