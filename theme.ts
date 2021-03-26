import { extendTheme } from "@chakra-ui/react";

// Let's say you want to add custom colors
const customTheme = extendTheme({
  styles: {
    global: {
      'body': {
        scrollBehavior: 'smooth',
        fontSize: '0.875rem'
      }
    }
  },
  sizes: {
    xxs: "4.5em",
    "2sm": "14.5em",
    xxl: "7em",
  },
  colors: {
    brand: {
      100: "#c90eb7",
      900: "#0c26ed",
    },
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "83.5em",
    xsl: "93em",
    "2xl": "96em",
    xxl: "95em",
  },
});

export default customTheme;
