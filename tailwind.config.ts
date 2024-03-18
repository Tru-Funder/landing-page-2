import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },

    colors: {
      red: {
        "50": "#feeceb",
        "100": "#fac5c1",
        "200": "##f8a9a3",
        "300": "#f5827a",
        "400": "#f36960",
        "500": "#f04438",
        "600": "#da3e33",
        "700": "#aa3028",
        "800": "#84251f",
        "900": "#651d18",
      },
      green: {
        "50": "#e6f3e6",
        "100": "#b0dab2",
        "200": "#8ac98c",
        "300": "#54b058",
        "400": "#33a137",
        "500": "#008905",
        "600": "#007d05",
        "700": "#006104",
        "800": "#004b03",
        "900": "#003a02",
      },
      blue: {
        "50": "#eaeffc",
        "100": "#bfcef5",
        "200": "#9fb6f0",
        "300": "#7495ea",
        "400": "#5981e5",
        "500": "#2f61df",
        "600": "#2b58cb",
        "700": "#21459e",
        "800": "#1a357b",
        "900": "#14295e",
      },
      yellow: {
        "50": "#fffbe6",
        "100": "#fff1b1",
        "200": "#ffea8b",
        "300": "#fee155",
        "400": "#fedb35",
        "500": "#fed202",
        "600": "#e7bf02",
        "700": "#b49501",
        "800": "#8c7401",
        "900": "#6b5801",
      },
      grey: {
        "50": "#f1f1f1",
        "100": "#d3d3d3",
        "200": "#bebebe",
        "300": "#a1a1a1",
        "400": "#8e8e8e",
        "500": "#727272",
        "600": "#686868",
        "700": "#515151",
        "800": "#3f3f3f",
        "900": "#303030",
      },
      neutral: {
        "50": "#fdfdfe",
        "100": "#fafafb",
        "200": "#f8f8f9",
        "300": "#f4f4f6",
        "400": "#f2f2f4",
        "500": "#efeff1",
        "600": "#d9d9db",
        "700": "#aaaaab",
        "800": "#838385",
        "900": "#646465",
      },
      black: "#001101",
      white: "#ffffff",
      transparent: "#00000000",
    },
  },
  plugins: [],
};
export default config;
