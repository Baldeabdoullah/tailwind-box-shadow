/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      margin: {
        1: "14px",
        2: "16px",
        3: "18px",
        4: "20px",
      },
      colors: {
        vuejs: {
          100: "#7deb65",
          200: "#6ff252",
        },
      },
    },
  },
  plugins: [],
};
