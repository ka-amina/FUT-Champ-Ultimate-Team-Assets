/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/style/**/*.css"],
  theme: {
    extend: {
      colors: {
        primary: "#55cca2",
        "primary-hover":"#2F9B75"
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
    plugins: [],
  },
};
