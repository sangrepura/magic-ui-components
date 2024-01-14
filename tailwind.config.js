/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": {
            "background-position": "calc(-100% - 70px) 0",
          },
          "50%": {
            "background-position": "calc(100% + 70px) 0",
          },
          "100%": {
            "background-position": "calc(-100% - 70px) 0",
          },
        },
      },
    },
    animation: {
      shimmer: "shimmer 12s infinite",
    },
  },
  plugins: [],
};
