import React, { createContext, useContext, useState } from "react";

interface SectionInViewContextType {
  currentSectionInView: string;
  setCurrentSectionInView: (currentSectionInView: string) => void;
}
type SectionInViewContextProps = {
  children: React.ReactNode;
};
const defaultGobalContext: SectionInViewContextType = {
  currentSectionInView: "summary",
  setCurrentSectionInView: (currentSectionInView: string) => undefined,
};

const SectionInViewContext =
  createContext<SectionInViewContextType>(defaultGobalContext);
export const useSectionInViewContext = () => useContext(SectionInViewContext);

export const SectionInViewContextProvider = (
  props: SectionInViewContextProps
) => {
  const { children } = props;
  const [currentSectionInView, setCurrentSectionInView] =
    useState<string>("summary");

  return (
    <SectionInViewContext.Provider
      value={{
        currentSectionInView,
        setCurrentSectionInView,
      }}
    >
      {children}
    </SectionInViewContext.Provider>
  );
};
