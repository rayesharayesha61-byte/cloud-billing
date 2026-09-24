import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";

import { createTheme } from "@mui/material/styles";
import colors from "../theme/colors";

const ThemeContext = createContext();

export const AppThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((previous) =>
      previous === "light" ? "dark" : "light"
    );
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,

          primary: {
            main: mode === "light" ? colors.primary : "#3B82F6",
          },

          secondary: {
            main: mode === "light" ? colors.secondary : "#6366F1",
          },

          background: {
            default:
              mode === "light" ? "#F8FAFC" : "#0F172A",
            paper:
              mode === "light" ? "#FFFFFF" : "#1E293B",
          },

          text: {
            primary:
              mode === "light" ? "#0F172A" : "#F8FAFC",
            secondary:
              mode === "light" ? "#64748B" : "#94A3B8",
          },
        },

        typography: {
          fontFamily: "Inter, Roboto, Arial, sans-serif",

          button: {
            textTransform: "none",
            fontWeight: 600,
          },
        },

        shape: {
          borderRadius: 10,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider
      value={{
        mode,
        toggleTheme,
      }}
    >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  return useContext(ThemeContext);
};