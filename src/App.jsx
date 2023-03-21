import React from "react";
import SearchStates from "./context/Query/SearchStates";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ColorModeContext from "./context/Theme/ColorModeContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import CasesPage from "./Pages/CasesPage";
import DashBoard from "./Pages/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    errorElement: <NotFound />,
  },
  {
    path: "/Dashboard",
    element: <DashBoard />,
    errorElement: <NotFound />,
  },
  {
    path: "/Cases",
    element: <CasesPage />,
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "/Contact",
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: "/NotFound",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
  {
    path: "/*",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);
export default function App() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#5e35b1",
            dark: "#e040fb",
            light: "#fff",
          },

          text: {
            primary: mode === "light" ? "#f9a825" : "#53DDC3",
            secondary: mode === "light" ? "#312D4B" : "#f9a825",
            dark: "#e040fb",
            light: "#fff",
            disabled: mode === "light" ? "#666666" : "#CDD8F6",
          },
          background: {
            paper: mode === "light" ? "#fff" : "#312D4B",
            default: mode === "light" ? "#fafafa" : "#28243D",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SearchStates>
          <RouterProvider router={router} />
        </SearchStates>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

