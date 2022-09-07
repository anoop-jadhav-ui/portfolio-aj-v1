import React, { createContext, useContext, useEffect, useState } from "react";
import { initialProfileData, ProfileData } from "../Types/profileDataTypes";
import fetchData from "../firebaseConfig";
import getFilteredLeftPaneData, {
  LeftPaneMenuItem,
} from "../components/LeftPane/leftPaneData";

interface GlobalContextType {
  profileData: ProfileData;
  isProfileDataLoaded: boolean;
  leftPaneData: Array<LeftPaneMenuItem>;
}
type GlobalContextProps = {
  children: React.ReactNode;
};
const defaultGobalContext: GlobalContextType = {
  profileData: initialProfileData,
  isProfileDataLoaded: false,
  leftPaneData: [],
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

  useEffect(() => {
    (async () => {
      const fetchedProfileData = await fetchData();
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
