// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme(
  { config },
  {
    styles: {
      global: (props) => ({
        "html, body": {
          bgColor: props.colorMode === "dark" ? "#15202b" : "gray.50",
        },
      }),
    },
  },
  {
    fonts: {
      heading: "Inter",
      body: "Noto Sans",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  }
);

export default theme;
