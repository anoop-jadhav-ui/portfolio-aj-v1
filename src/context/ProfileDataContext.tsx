import React, { createContext, useContext, useEffect, useState } from 'react'
import getFilteredLeftPaneData, {
    LeftPaneMenuItem,
} from '../components/Molecules/LeftPane/leftPaneData'
import rawTestProfileData from '../data/testData.json'
import fetchProfileData from '../helpers/fetchProfileData'
import { ProfileData } from '../types/profileDataTypes'

const testProfileData = rawTestProfileData as ProfileData

interface ProfileDataContextType {
    profileData: ProfileData
    leftPaneData: Array<LeftPaneMenuItem>
}
type ProfileDataContextProps = {
    children: React.ReactNode
    initialProfileData?: ProfileData
}
const defaultGobalContext: ProfileDataContextType = {
    profileData: testProfileData,
    leftPaneData: [],
}

const ProfileDataContext =
    createContext<ProfileDataContextType>(defaultGobalContext)
export const useProfileDataContext = () => useContext(ProfileDataContext)

export const ProfileDataContextProvider = ({
    children,
    initialProfileData,
}: ProfileDataContextProps) => {
    const [profileData, setProfileData] =
        useState<ProfileData>(initialProfileData ?? testProfileData)
    const [leftPaneData, setLeftPaneData] = useState<Array<LeftPaneMenuItem>>(
        getFilteredLeftPaneData({
            ...(initialProfileData ?? testProfileData).appFeatureAvailability,
        })
    )

    useEffect(() => {
        if (initialProfileData) {
            return
        }

        fetchProfileData().then((profileData) => {
            setProfileData(profileData)
            setLeftPaneData(
                getFilteredLeftPaneData({
                    ...profileData.appFeatureAvailability,
                })
            )
        })
    }, [initialProfileData])

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
