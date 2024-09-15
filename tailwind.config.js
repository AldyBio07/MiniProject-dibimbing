/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        // add more animations as needed
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      colors: {
        "custom-green": "#8BA78D",
        "custom-dark": "#403C33",
      },
      backgroundImage: {
        "custom-image": "url('./src/assets/bg1.jpg')", // Replace with the actual path to your image
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwindcss-animated")],
};
