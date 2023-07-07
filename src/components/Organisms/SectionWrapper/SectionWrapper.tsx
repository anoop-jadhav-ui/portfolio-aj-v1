import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSectionInViewContext } from "../../../context/SectionInViewContext";
import ErrorBoundary from "../../Molecules/ErrorBoundary/ErrorBoundary";
import "./SectionWrapper.scss";
import constants from "../../../helpers/constants";

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
    const {
      currentSectionInView,
      setSkillsSectionVisited,
      isSkillsSectionVisited,
    } = useSectionInViewContext();
    const { t } = useTranslation();

    useEffect(() => {
      if (
        currentSectionInView === constants.classNames.SKILLS &&
        !isSkillsSectionVisited
      ) {
        setSkillsSectionVisited(true);
      }
    }, [currentSectionInView]);

    return (
      <ErrorBoundary errorMessage={t("sectionLoadError")}>
        <div
          className={`${sectionName} section ${
            sectionName === currentSectionInView ? "section-in-view" : ""
          } ${isSkillsSectionVisited ? "visited" : ""}`}
        >
          <SectionInViewIdentifier sectionName={sectionName} />
          <Component />
        </div>
      </ErrorBoundary>
    );
  };

export default SectionWrapper;
