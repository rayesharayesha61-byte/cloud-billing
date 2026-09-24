import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";
import { AppThemeProvider } from "./context/ThemeContext";

import "./App.css";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppThemeProvider>
  </React.StrictMode>
);