/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        socialBg: "#E9EDF5",
        socialBlue: "#218DFA",
        socialOrange: "#FF6100",
      },
    },
  },
  plugins: [],
};
