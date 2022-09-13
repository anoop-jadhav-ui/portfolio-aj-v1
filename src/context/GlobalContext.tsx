import React, { createContext, useContext, useEffect, useState } from "react";
import { initialProfileData, ProfileData } from "../types/profileDataTypes";
import fetchProfileData from "../helpers/fetchProfileData";
import getFilteredLeftPaneData, {
  LeftPaneMenuItem,
} from "../components/Organisms/LeftPane/leftPaneData";

interface GlobalContextType {
  profileData: ProfileData;
  isProfileDataLoaded: boolean;
  leftPaneData: Array<LeftPaneMenuItem>;
  currentSectionInView: string;
  setCurrentSectionInView: (currentSectionInView: string) => void;
}
type GlobalContextProps = {
  children: React.ReactNode;
};
const defaultGobalContext: GlobalContextType = {
  profileData: initialProfileData,
  isProfileDataLoaded: false,
  leftPaneData: [],
  currentSectionInView: "summary",
  setCurrentSectionInView: (currentSectionInView) => {
    /* TODO document why this method 'setDarkMode' is empty */
  },
};

const GlobalContext = createContext<GlobalContextType>(defaultGobalContext);
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = (props: GlobalContextProps) => {
  const { children } = props;
  const [profileData, setProfileData] =
    useState<ProfileData>(initialProfileData);
  const [isProfileDataLoaded, setIsProfileDataLoaded] =
    useState<boolean>(false);

  const [leftPaneData, setLeftPaneData] = useState<Array<LeftPaneMenuItem>>([]);
  const [currentSectionInView, setCurrentSectionInView] =
    useState<string>("summary");

  useEffect(() => {
    (async () => {
      const fetchedProfileData = await fetchProfileData();
      setProfileData(fetchedProfileData);
      setLeftPaneData(
        getFilteredLeftPaneData(fetchedProfileData.appFeatureAvailability)
      );
      setIsProfileDataLoaded(true);
    })();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        profileData,
        isProfileDataLoaded,
        leftPaneData,
        currentSectionInView,
        setCurrentSectionInView,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
