import React, { createContext, ReactNode, useContext, useState } from "react";

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
  const [darkMode, setDarkMode] = useState<boolean>(false);
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
