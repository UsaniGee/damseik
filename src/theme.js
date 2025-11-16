import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7caca",
      500: "#D10205",
    },
    damseik: {
      red: "#D10205",
      green: "#5EA52F",
      darkBlue: "#003366",
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "1rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    full: "9999px",
  },
});

export default theme;
