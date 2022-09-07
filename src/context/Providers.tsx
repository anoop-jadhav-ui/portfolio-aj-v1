import { GlobalContextProvider } from "./GlobalContext";
import React, { ReactNode } from "react";
import ThemeContextProvider from "./ThemeContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </ThemeContextProvider>
  );
};

export default Providers;
