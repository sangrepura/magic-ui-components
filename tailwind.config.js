/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { "background-position": "-320px 0" },
          "50%": { "background-position": "320px 0" },
          "100%": { "background-position": "-320px 0" },
        },
      },
      animation: {
        shimmer: "shimmer 12s infinite",
      },
    },
  },
  plugins: [],
};
