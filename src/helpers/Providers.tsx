import { GlobalContextProvider } from "../context/GlobalContext";
import React, { ReactNode } from "react";
import ThemeContextProvider from "../context/ThemeContext";
import { SectionInViewContextProvider } from "../context/SectionInViewContext";
import { RecentArticleContextProvider } from "../context/RecentArticleContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      <GlobalContextProvider>
        <RecentArticleContextProvider>
          <SectionInViewContextProvider>
            {children}
          </SectionInViewContextProvider>
        </RecentArticleContextProvider>
      </GlobalContextProvider>
    </ThemeContextProvider>
  );
};

export default Providers;
