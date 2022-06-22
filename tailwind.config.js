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
        'tint-seamist': '#9aC9CE',
        'tint-deepwater': '#6F7588',
        'tint-deepwater-light': '#979fb9',
        'tint-antiqueteal': '#75949E',
        'tint-rouge-light': '#c6a6aa', 
      }),
    extend: {
      colors: {
        'mulberry': '#705159',
        'spruce': '#577072',
        'spruce-light': '#97AEAF',
        'spruce-dark': '#2C393A',
        'apricot': '#fabb74',
        'fog': '#f3f6f8',
        'linen': '#EAE6E0',
        'navy': '#1C2740',
        'seafoam': '#61C2A2',
        'skyblue': '#88B8D1',
        'seamist': '#9aC9CE',
        'deepwater': '#6F7588',
        'deepwater-light': '#979fb9'
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
