import React, { useEffect, useMemo, useRef } from "react";
import useDOMFeatures from "../../../hooks/useDOMFeatures";
import { useGlobalContext } from "../../../context/GlobalContext";

const SectionVisibilityHOC =
  (Component: () => JSX.Element, sectionName: string) => () => {
    const compRef = useRef<HTMLDivElement>(null);
    const { scrollPosition, isElementInViewport } = useDOMFeatures();
    const { setCurrentSectionInView } = useGlobalContext();

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
        ref={compRef}
        className={`${sectionName}-view col-md-7 ${textAlignment} section`}
      >
        <Component />
      </div>
    );
  };

export default SectionVisibilityHOC;
