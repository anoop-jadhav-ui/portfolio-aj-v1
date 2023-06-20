import React, { useEffect, useRef } from "react";
import { useSectionInViewContext } from "../../../context/SectionInViewContext";
import useScrollPosition from "../../../hooks/useScrollPosition";
import "./SectionWrapper.scss";

export const isElementInViewport = (el: HTMLDivElement) => {
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

const SectionInViewIdentifier = ({ sectionName }: { sectionName: string }) => {
  const { scrollPosition } = useScrollPosition();
  const { setCurrentSectionInView } = useSectionInViewContext();
  const compRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentComponent = compRef?.current;
    if (currentComponent && isElementInViewport(currentComponent)) {
      setCurrentSectionInView(sectionName);
    }
  }, [scrollPosition]);

  return <div ref={compRef} className="section-floating-element" />;
};

const SectionWrapper =
  (Component: () => JSX.Element, sectionName: string) => () => {
    return (
      <div className={`${sectionName} section`}>
        <SectionInViewIdentifier sectionName={sectionName} />
        <Component />
      </div>
    );
  };

export default SectionWrapper;
