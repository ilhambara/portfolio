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
    colors: {
      bgMain: "#15202b",
    },
    fonts: {
      heading: "Noto Sans",
      body: "Noto Sans",
    },
  }
);

export default theme;
