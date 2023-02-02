import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import getFilteredLeftPaneData, {
  LeftPaneMenuItem,
} from "../components/Organisms/LeftPane/leftPaneData";
import { initialProfileData } from "../helpers/defaultValues";
import fetchProfileData from "../helpers/fetchProfileData";
import { ProfileData } from "../types/profileDataTypes";

interface ProfileDataContextType {
  profileData: ProfileData;
  isProfileDataLoaded: boolean;
  leftPaneData: Array<LeftPaneMenuItem>;
}
type ProfileDataContextProps = {
  children: React.ReactNode;
};
const defaultGobalContext: ProfileDataContextType = {
  profileData: initialProfileData,
  isProfileDataLoaded: false,
  leftPaneData: [],
};

const ProfileDataContext =
  createContext<ProfileDataContextType>(defaultGobalContext);
export const useProfileDataContext = () => useContext(ProfileDataContext);

export const ProfileDataContextProvider = ({
  children,
}: ProfileDataContextProps) => {
  const [profileData, setProfileData] =
    useState<ProfileData>(initialProfileData);
  const [isProfileDataLoaded, setIsProfileDataLoaded] =
    useState<boolean>(false);
  const [leftPaneData, setLeftPaneData] = useState<Array<LeftPaneMenuItem>>([]);

  useLayoutEffect(() => {
    (async () => {
      const fetchedProfileData = await fetchProfileData();
      setProfileData(fetchedProfileData);
      setLeftPaneData(
        getFilteredLeftPaneData({
          ...fetchedProfileData.appFeatureAvailability,
        })
      );
      setIsProfileDataLoaded(true);
    })();
  }, []);

  return (
    <ProfileDataContext.Provider
      value={{
        profileData,
        isProfileDataLoaded,
        leftPaneData,
      }}
    >
      {children}
    </ProfileDataContext.Provider>
  );
};
