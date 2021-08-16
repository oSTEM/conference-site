module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#f3f6f8',
        'secondary': '#FFF8EB',
        'dark': '#577072',
        'tint-spruce': '#577072',
        'tint-spruce-light': '#97AEAF',
        'tint-apricot': '#fabb74',
      }),
    extend: {
      colors: {
        'mulberry': '#705159',
        'spruce': '#577072',
        'spruce-light': '#97AEAF',
        'spruce-dark': '#2C393A',
        'apricot': '#fabb74',
        'fog': '#f3f6f8',
        'linen': '#ffe8c0',
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        sans: ["Noto Sans Serif", "Arial"]
      },
      flex: {
        // add the flex-2 class
        2: "2 2 0%",
      },
      sepia: {
          19: '.19',
      },
      invert: {
          51: '.51',
      },
      saturate: {
          5145: '51.45',
      },
      contrast: {
          87: '0.87'
      },
      hueRotate: {
          126: '126deg',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
