import React, { createContext, useContext, useState } from "react";

interface SectionInViewContextType {
  currentSectionInView: string;
  setCurrentSectionInView: (currentSectionInView: string) => void;
  isSkillsSectionVisited: boolean;
  setSkillsSectionVisited: (value: boolean) => void;
}

type SectionInViewContextProps = {
  children: React.ReactNode;
};

const defaultGobalContext: Partial<SectionInViewContextType> = {
  currentSectionInView: "summary",
  isSkillsSectionVisited: false,
};

const SectionInViewContext = createContext<SectionInViewContextType>(
  defaultGobalContext as SectionInViewContextType
);

export const useSectionInViewContext = () => useContext(SectionInViewContext);

export const SectionInViewContextProvider = (
  props: SectionInViewContextProps
) => {
  const { children } = props;
  const [currentSectionInView, setCurrentSectionInView] =
    useState<string>("summary");

  const [isSkillsSectionVisited, setSkillsSectionVisited] = useState(false);

  return (
    <SectionInViewContext.Provider
      value={{
        currentSectionInView,
        setCurrentSectionInView,
        isSkillsSectionVisited,
        setSkillsSectionVisited,
      }}
    >
      {children}
    </SectionInViewContext.Provider>
  );
};
