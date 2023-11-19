/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgHeader: "#F4EDD3",
        bgNavbar: "#ED7E01"
      },
      boxShadow: {
        neon: "0 0 5px yellow, 0 0 20px purple"
      }
    }
  },
  plugins: []
}

