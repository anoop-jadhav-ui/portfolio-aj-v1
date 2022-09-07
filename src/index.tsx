import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./context/Providers";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Providers>
    <App />
  </Providers>
);
