import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import usePersistState from "../hooks/usePersistState";
import { isMobile as isDeviceMobile } from "react-device-detect";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  isMobile: boolean;
}

const defaultTheme: ThemeContextType = {
  darkMode: false,
  setDarkMode: () => {
    /* TODO document why this method 'setDarkMode' is empty */
  },
  isMobile: false,
};

export const ThemeContext = createContext<ThemeContextType>(defaultTheme);
export const useTheme = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = usePersistState<boolean>("DarkMode", false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(isDeviceMobile);
  }, []);

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
        isMobile,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
