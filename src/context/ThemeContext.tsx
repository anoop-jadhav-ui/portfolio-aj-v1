import React, { createContext, ReactNode, useContext, useEffect } from "react";
import usePersistState from "../hooks/usePersistState";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const defaultTheme: ThemeContextType = {
  darkMode: false,
  setDarkMode: () => {
    /* TODO document why this method 'setDarkMode' is empty */
  },
};

export const ThemeContext = createContext<ThemeContextType>(defaultTheme);
export const useTheme = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = usePersistState<boolean>("DarkMode", false);

  // useEffect(() => {
  //   if (
  //     window.matchMedia &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ) {
  //     setDarkMode(true);
  //   }
  // }, []);

  useEffect(() => {
    darkMode
      ? document.querySelector("body")?.classList.add("darkmode")
      : document.querySelector("body")?.classList.remove("darkmode");
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
