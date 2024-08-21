import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./assets/styles/gradientBefore.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/photosnap_site/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
