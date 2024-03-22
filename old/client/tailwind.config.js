/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        palette1: "#FFFFFF",
        palette2: "#F5F3F4",
        palette3: "#D3D3D3",
        palette4: "#B1A7A6",
        palette5: "#E5383B",
        palette6: "#BA181B",
        palette7: "#A4161A",
        palette8: "#660708",
        palette9: "#0B090A",
      },
    },
  },
  plugins: [],
};
