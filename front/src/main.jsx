import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/Main/Footer.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
