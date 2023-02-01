import React, { createContext, useContext, useEffect, useState } from "react";
import getFilteredLeftPaneData, {
  LeftPaneMenuItem,
} from "../components/Organisms/LeftPane/leftPaneData";
import { initialProfileData } from "../helpers/defaultValues";
import fetchProfileData from "../helpers/fetchProfileData";
import { getRecentArticles } from "../helpers/hashnodeApi";
import { ProfileData, RecentArticle } from "../types/profileDataTypes";

interface GlobalContextType {
  recentArticles: Array<RecentArticle>;
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
  recentArticles: [],
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
  const [recentArticles, setRecentArticles] = useState<Array<RecentArticle>>(
    []
  );
  const [profileData, setProfileData] =
    useState<ProfileData>(initialProfileData);
  const [isProfileDataLoaded, setIsProfileDataLoaded] =
    useState<boolean>(false);
  const [leftPaneData, setLeftPaneData] = useState<Array<LeftPaneMenuItem>>([]);

  const [currentSectionInView, setCurrentSectionInView] =
    useState<string>("summary");

  useEffect(() => {
    (async () => {
      let errorWhileLoadingArticles = false;
      try {
        const recentArticles = await getRecentArticles();
        setRecentArticles(recentArticles);
      } catch (e) {
        console.log(e);
        errorWhileLoadingArticles = true;
      }

      const fetchedProfileData = await fetchProfileData();
      setProfileData(fetchedProfileData);
      setLeftPaneData(
        getFilteredLeftPaneData({
          ...fetchedProfileData.appFeatureAvailability,
          recentArticles: !errorWhileLoadingArticles,
        })
      );
      setIsProfileDataLoaded(true);
    })();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        recentArticles,
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
