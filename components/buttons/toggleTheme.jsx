import { Button, Tooltip, useColorMode } from "@chakra-ui/react";
import * as React from "react";

export default function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      hasArrow
      label={`Toggle ${colorMode} mode 🌓`}
      fontWeight="semibold"
    >
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "🌑 Dark" : "🌕 Light"}
      </Button>
    </Tooltip>
  );
}
