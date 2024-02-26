/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "wand-black":
          "  background: linear-gradient(to right, rgb(26 24 28) 10%, rgb(42 40 44) 45% 55%, rgb(26 24 28) 90%);",
      },
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
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
    animation: {
      shimmer: "shimmer 12s infinite",
      "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      slide: "slide var(--speed) ease-in-out infinite alternate",
    },
  },
  plugins: [],
};
