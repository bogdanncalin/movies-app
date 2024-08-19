/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant file extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
