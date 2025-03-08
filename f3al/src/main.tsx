import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/router.tsx";
import Home from "./components/Home/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter Children={<Home />}></AppRouter>
  </StrictMode>
);
