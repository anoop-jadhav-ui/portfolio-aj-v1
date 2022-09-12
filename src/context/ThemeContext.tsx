import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import usePersistState from "../hooks/usePersistState";

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

  function detectBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.match(/chrome|chromium|crios/i)) {
      return "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      return "Firefox";
    } else if (userAgent.match(/safari/i)) {
      return "Safari";
    } else if (userAgent.match(/opr\//i)) {
      return "Opera";
    } else if (userAgent.match(/edg/i)) {
      return "Edge";
    } else if (userAgent.match(/android/i)) {
      return "Android";
    } else if (userAgent.match(/iphone/i)) {
      return "iPhone";
    } else {
      return "Unknown";
    }
  }

  useEffect(() => {
    const browser = detectBrowser();

    if (["Android", "iPhone"].includes(browser)) {
      // content for touch-screen (mobile) devices
      setIsMobile(true);
    } else {
      // everything else (desktop)\
      setIsMobile(false);
    }
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
