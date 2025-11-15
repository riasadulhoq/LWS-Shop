/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        "shop-black": "#000000",
        "shop-red": "#FF3333",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
