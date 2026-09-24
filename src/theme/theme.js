import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: colors.secondary,
    },

    background: {
      default: colors.background,
      paper: colors.surface,
    },

    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },

    success: {
      main: colors.success,
    },

    warning: {
      main: colors.warning,
    },

    error: {
      main: colors.danger,
    },
  },

  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 20px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(15, 23, 42, 0.06)",
        },
      },
    },
  },
});

export default theme;