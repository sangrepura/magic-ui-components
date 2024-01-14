/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        shimmerGradient:
          "linear-gradient(to right, #f6f7f8 4%, #edeef1 25%, #f6f7f8 36%)",
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
      },
    },
    animation: {
      shimmer: "shimmer 12s infinite",
    },
  },
  plugins: [],
};
