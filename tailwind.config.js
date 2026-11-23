/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crepe: {
          bg: "#0B0D12",
          surface: "#141720",
          card: "#1A1E29",
          border: "#262C3D",
          gold: "#E6B34A",
          goldLight: "#F5D078",
          amber: "#F59E0B",
          chocolate: "#8B4513",
          berry: "#E11D48",
          berryHover: "#BE123C",
          cream: "#F9F6EE"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
