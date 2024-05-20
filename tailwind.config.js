/**
 * Because the new navbar is dynamically generated, we need to manually tell Tailwind what CSS classes we need for navbar coloring.
 * Refer to Navbar.config and NavbarCore for more information.
 */
import {NAVBAR_CATEGORIES} from './src/components/navbar/Navbar.config';
let safelist = [];
for (let i of NAVBAR_CATEGORIES) {
  let c = i.color;
  safelist.push(...[`border-${c}`, `dark:border-${c}`, `border-${c}/15`, `focus-visible:ring-${c}/75`, `hover:bg-${c}/15`, `bg-${c}/15`, `active:bg-${c}/20`, `hover:bg-${c}/70`, `dark:bg-${c}/25`, `dark:bg-${c}/50`, `dark:hover:bg-${c}/40`, `bg-${c}`, `text-${c}`]);
}

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  darkMode: 'selector',
  safelist,
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "primary": "var(--bg-primary)",
      "secondary": "#FFF8EB",
      "dark": "#577072",
      "tint-spruce": "#577072",
      "tint-spruce-light": "#97AEAF",
      "tint-apricot": "#fabb74",
      "tint-seamist": "#9aC9CE",
      "tint-deepwater": "#6F7588",
      "tint-deepwater-light": "#979fb9",
      "tint-antiqueteal": "#75949E",
      "tint-rouge-light": "#c6a6aa",
      "bright-peach": "#EB6955",
    }),
    transitionDuration: {
      DEFAULT: '180ms',
      '135': '135ms',
      '270': '270ms',
      '360': '360ms'
    },
    extend: {
      colors: {
        // Colors to CONSOLIDATE / CLEAN UP
        "mulberry": "#705159",
        "raspberry": "#E30B5C",
        "spruce": "#577072",
        "spruce-light": "#97AEAF",
        "spruce-dark": "#2C393A",
        "apricot": "#fabb74",
        "fog": "#f3f6f8",
        "linen": "#EAE6E0",
        "navy": "#1C2740",
        "seafoam": "#61C2A2",
        "skyblue": "#88B8D1",
        "seamist": "#9aC9CE",
        "deepwater": "#6F7588",
        "deepwater-light": "#979fb9",
        "peach": "#FF9185",
        "light-peach": "#f7c2bc",
        "chill-yellow": "#FFD285",
        "amber": "#f59e0b",
        // Colors to KEEP
        "ostem-blue": "#1B7EA1",
        "text-color": "var(--text-color)",
        "bright-peach": "var(--color-bright-peach)",
        "dark-teal": "var(--color-dark-teal)",
        "chill-green": "var(--color-chill-green)",
        "green-gray": "var(--color-green-gray)",
        // Navbar accents
        "nav-accent": "#6d8b85", // Default accent
        "nav-green": "rgb(var(--sp-nav-accent-green) / <alpha-value>)",
        "nav-blue": "rgb(var(--sp-nav-accent-blue) / <alpha-value>)",
        "nav-purple": "rgb(var(--sp-nav-accent-purple) / <alpha-value>)",
        "nav-pink": "rgb(var(--sp-nav-accent-pink) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
      },
      flex: {
        // add the flex-2 class
        2: "2 2 0%",
      },
      sepia: {
        19: ".19",
      },
      invert: {
        51: ".51",
      },
      saturate: {
        5145: "51.45",
      },
      contrast: {
        87: "0.87",
      },
      hueRotate: {
        126: "126deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
