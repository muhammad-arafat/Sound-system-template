/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        product: 'url("/src/assets/images/product-bg.png")',
        commercial: 'url("/src/assets/images/commercial-background.png")',
      },
      colors: {
        "black-color": "#222831",
        "white-color": "#FFFBF5",
        "red-color": "#A0153E",
        "gray-color": "#B4B4B8",
      },
    },
  },
  plugins: [],
};
