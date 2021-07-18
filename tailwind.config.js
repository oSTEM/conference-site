module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        halloween: "#d47a1e",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        sans: ["Noto Sans Serif", "Arial"]
      },
      flex: {
        // add the flex-2 class
        2: "2 2 0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
