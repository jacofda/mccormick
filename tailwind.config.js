/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#072344",
      secondary: "#00aaa1",
      "green-light": "#cceeec",
      green: "#007c85",
      "green-dark": "#065a68",
      "blue-light": "#b3d6f1",
      blue: "#0074d1",
      "blue-dark": "#072344",
      black: "#000000",
      white: "#ffffff",
      "yellow-lighter": "#f6e8c6",
      "yellow-light": "#f8edd0",
      yellow: "#f4d06f",
      "yellow-dark": "#daa512",
      "grey-lightest": "#eff0f3",
      "grey-lighter": "#eceef1",
      "grey-light": "#ccd7e0",
      grey: "#adb6c4",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
