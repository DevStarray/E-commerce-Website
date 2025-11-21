/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // You can add custom colors, fonts, etc. here
      colors: {
        "rabbit-red": "#ea2e0e",
      },
    },
  },
  plugins: [],
};

