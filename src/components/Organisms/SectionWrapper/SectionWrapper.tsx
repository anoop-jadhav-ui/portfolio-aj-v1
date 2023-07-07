import React, { useCallback, useEffect, useRef } from "react";
import { useSectionInViewContext } from "../../../context/SectionInViewContext";
import T from "../../../translations/en_IN";
import ErrorBoundary from "../../Molecules/ErrorBoundary/ErrorBoundary";
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
  const { setCurrentSectionInView } = useSectionInViewContext();
  const compRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSectionInView(sectionName);
        }
      });
    },
    []
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    if (compRef.current) {
      observer = new IntersectionObserver(handleIntersection);
      observer.observe(compRef.current);
    }
    return () => {
      observer?.disconnect();
    };
  }, [compRef.current]);

  return <div ref={compRef} className="section-floating-element" />;
};

const SectionWrapper =
  (Component: () => JSX.Element, sectionName: string) => () => {
    const { currentSectionInView } = useSectionInViewContext();
    return (
      <ErrorBoundary errorMessage={T.SECTION_LOAD_ERROR}>
        <div
          className={`${sectionName} section ${
            sectionName === currentSectionInView ? "section-in-view" : ""
          }`}
        >
          <SectionInViewIdentifier sectionName={sectionName} />
          <Component />
        </div>
      </ErrorBoundary>
    );
  };

export default SectionWrapper;
