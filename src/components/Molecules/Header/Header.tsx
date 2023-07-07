import React, { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../../../context/ThemeContext";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { Logo } from "../../Atoms/Logo/Logo";
import "./Header.scss";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { darkMode, setDarkMode, isMobile } = useTheme();
  const { scrollPosition } = useScrollPosition();
  const { t } = useTranslation();

  const isOverlayHeader = useMemo(() => {
    if (headerRef.current) {
      const headerEle = headerRef.current.getBoundingClientRect();
      return headerEle.bottom < scrollPosition;
    }
    return false;
  }, [scrollPosition]);

  const toDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`header ${isOverlayHeader ? "overlayHeader" : ""}`}
      ref={headerRef}
    >
      <div className="header-wrapper">
        <Logo />
        <div className="menu">
          <div className="menuItem selected">
            <a href="/"> {t("home")}</a>
          </div>
          <div className="menuItem">
            <a
              href={import.meta.env.VITE_HASHNODE_BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("blogs")}
            </a>
          </div>
          <div className="menuItem">
            <div className="darkModeSwitch" title="Toggle dark mode">
              <DarkModeSwitch
                checked={darkMode}
                onChange={toDarkMode}
                size={isMobile ? 20 : 24}
                sunColor="var(--primary-color)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
