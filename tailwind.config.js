/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", //컴파일 시간을 시간을 줄여주는 속성.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
