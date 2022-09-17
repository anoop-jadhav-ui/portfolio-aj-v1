import React, { useEffect, useMemo, useRef } from "react";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { useGlobalContext } from "../../../context/GlobalContext";
import "./SectionVisibilityHOC.scss";
import { useTheme } from "../../../context/ThemeContext";
const SectionVisibilityHOC =
  (Component: () => JSX.Element, sectionName: string) => () => {
    const compRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useTheme();
    const { scrollPosition } = useScrollPosition();
    const { setCurrentSectionInView } = useGlobalContext();

    const isElementInViewport = (el: HTMLDivElement) => {
      const rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >=
          (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight))
      );
    };

    useEffect(() => {
      if (!isMobile) {
        const currentComponent = compRef?.current;
        if (currentComponent && isElementInViewport(currentComponent)) {
          setCurrentSectionInView(sectionName);
        }
      }
    }, [scrollPosition, compRef]);

    const textAlignment = useMemo<string>(() => {
      return sectionName === "summary" ? "text-center" : "text-left";
    }, [sectionName]);

    return (
      <div className={`${sectionName} col-md-7 ${textAlignment} section`}>
        {/* Element to check if the section is in view port*/}
        {!isMobile && (
          <div ref={compRef} className="sectionFloatingElement"></div>
        )}
        <Component />
      </div>
    );
  };

export default SectionVisibilityHOC;
