import React, { useEffect, useMemo, useRef } from "react";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { useGlobalContext } from "../../../context/GlobalContext";
import "./SectionVisibilityHOC.scss";

const SectionVisibilityHOC =
  (Component: () => JSX.Element, sectionName: string) => () => {
    const compRef = useRef<HTMLDivElement>(null);
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
      const currentComponent = compRef?.current;
      if (currentComponent && isElementInViewport(currentComponent)) {
        setCurrentSectionInView(sectionName);
      }
    }, [scrollPosition, compRef]);

    const textAlignment = useMemo<string>(() => {
      return sectionName === "summary" ? "text-center" : "text-left";
    }, [sectionName]);

    return (
      <div
        className={`${sectionName} ${textAlignment} section animate__animated animate__fadeIn`}
      >
        <div ref={compRef} className="section-floating-element" />
        <Component />
      </div>
    );
  };

export default SectionVisibilityHOC;
