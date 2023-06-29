import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { isMobile as isDeviceMobile } from "react-device-detect";
import usePersistState from "../hooks/usePersistState";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  isMobile: boolean;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);
export const useTheme = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = usePersistState<boolean | undefined>(
    "DarkMode",
    true
  );
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(isDeviceMobile);
    const isDark = window?.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
    console.log("color scheme ", isDark ? "🌃" : "🌻");
  }, []);

  // useLayoutEffect(() => {
  //   window
  //     .matchMedia("(prefers-color-scheme: dark)")
  //     .addEventListener("change", function (e) {
  //       const isDark = e.matches;
  //       setDarkMode(isDark);
  //       console.log("color scheme changed to ", isDark ? "🌻" : "🌃");
  //     });
  // }, []);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body")?.classList.add("dark");
      document.querySelector("body")?.classList.remove("light");
    } else {
      document.querySelector("body")?.classList.add("light");
      document.querySelector("body")?.classList.remove("dark");
    }
    console.log("color scheme changed to ", darkMode ? "🌃" : "🌻");
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode: !!darkMode,
        setDarkMode,
        isMobile,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
