import testProfileData from '../data/testData.json'
import { ProfileData } from '../types/profileDataTypes'

const PROFILE_REVALIDATE_SECONDS = 300

export async function getProfileDataServer(): Promise<ProfileData> {
    try {
        if (process.env.NODE_ENV === 'development') {
            return testProfileData as ProfileData
        }

        const databaseUrl =
            process.env.NEXT_PUBLIC_APP_DATABASE_URL ??
            process.env.VITE_APP_DATABASE_URL
        if (!databaseUrl) {
            return testProfileData as ProfileData
        }

        const normalizedUrl = databaseUrl.endsWith('/')
            ? databaseUrl.slice(0, -1)
            : databaseUrl

        const response = await fetch(`${normalizedUrl}/.json`, {
            next: { revalidate: PROFILE_REVALIDATE_SECONDS },
        })

        if (!response.ok) {
            return testProfileData as ProfileData
        }

        const data = await response.json()
        return data as ProfileData
    } catch (error) {
        console.error('Failed to fetch profile data on server:', error)
        return testProfileData as ProfileData
    }
}
