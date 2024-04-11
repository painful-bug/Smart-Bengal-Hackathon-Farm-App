/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#282121",
          "200": "rgba(255, 255, 255, 0)",
        },
        black: "#000",
        gainsboro: "#d9d9d9",
        olive: "#8d8824",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        kadwa: "Kadwa",
      },
    },
    fontSize: {
      "16xl": "35px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
