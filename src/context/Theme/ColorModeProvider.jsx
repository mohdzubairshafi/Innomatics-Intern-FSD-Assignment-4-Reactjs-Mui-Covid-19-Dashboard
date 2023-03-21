import React, { Children } from "react";
import ColorModeContext from "./ColorModeContext";

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return <ColorModeContext.Provider value={colorMode}>{Children} </ColorModeContext.Provider>;
}
