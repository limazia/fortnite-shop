import { createRoot } from "react-dom/client";

import { Toastify } from "@/components/Toastify";

import { App } from "./App";

import "./styles/styles.css";

createRoot(document.getElementById("app")!).render(
  <>
    <App />
    <Toastify />
  </>
);
