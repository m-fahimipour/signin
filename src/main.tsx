import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/style.css";
import { AppThemeProvider } from "./theme/AppTheme.tsx";




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
  </React.StrictMode>
);
