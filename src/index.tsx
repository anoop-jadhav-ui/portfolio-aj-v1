import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App";
import Providers from "./helpers/Providers";
import "./CommonStyles.scss";
import "./BootstrapOverrideStyles.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Providers>
    <App />
  </Providers>
);
