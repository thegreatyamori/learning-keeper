module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,svg,js}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Share", "system-ui"],
    },
    fontSize: {
      base: "14px",
    },
    extend: {
      colors: {
        primary: {
          light: "#FFFFFF",
          DEFAULT: "#FFFFFF",
          dark: "#1D1B1B",
        },
        secondary: {
          light: "#000000",
          DEFAULT: "#000000",
          dark: "#51BA2C",
        },
        tertiary: {
          "light-25": "#9A9A9A",
          light: "#E1E1E1",
          DEFAULT: "#E1E1E1",
          dark: "#000000",
          "dark-25": "#808080",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
