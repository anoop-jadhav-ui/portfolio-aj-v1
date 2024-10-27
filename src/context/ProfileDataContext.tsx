import React, { createContext, useContext, useEffect, useState } from 'react'
import getFilteredLeftPaneData, {
    LeftPaneMenuItem,
} from '../components/Organisms/LeftPane/leftPaneData'
import { initialProfileData } from '../helpers/defaultValues'
import fetchProfileData from '../helpers/fetchProfileData'
import { ProfileData } from '../types/profileDataTypes'

interface ProfileDataContextType {
    profileData: ProfileData
    leftPaneData: Array<LeftPaneMenuItem>
}
type ProfileDataContextProps = {
    children: React.ReactNode
}
const defaultGobalContext: ProfileDataContextType = {
    profileData: initialProfileData,
    leftPaneData: [],
}

const ProfileDataContext =
    createContext<ProfileDataContextType>(defaultGobalContext)
export const useProfileDataContext = () => useContext(ProfileDataContext)

export const ProfileDataContextProvider = ({
    children,
}: ProfileDataContextProps) => {
    const [profileData, setProfileData] =
        useState<ProfileData>(initialProfileData)
    const [leftPaneData, setLeftPaneData] = useState<Array<LeftPaneMenuItem>>(
        []
    )

    useEffect(() => {
        fetchProfileData().then((profileData) => {
            setProfileData(profileData)
            setLeftPaneData(
                getFilteredLeftPaneData({
                    ...profileData.appFeatureAvailability,
                })
            )
        })
    }, [])

    return (
        <ProfileDataContext.Provider
            value={{
                profileData,
                leftPaneData,
            }}
        >
            {children}
        </ProfileDataContext.Provider>
    )
}
