import { GlobalContextProvider } from "../context/GlobalContext";
import React, { ReactNode } from "react";
import ThemeContextProvider from "../context/ThemeContext";

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeContextProvider>
            <GlobalContextProvider>{children}</GlobalContextProvider>
        </ThemeContextProvider>
    );
};

export default Providers;
