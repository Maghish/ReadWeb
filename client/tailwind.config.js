/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        palette1: "#d90429",
        palette2: "#ef233c",
        palette3: "#edf2f4",
        palette4: "#8d99ae",
        palette5: "#2b2d42",
      },
    },
  },
  plugins: [],
};
