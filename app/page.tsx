import HomePage from '../src/app/HomePage'
import { getRecentArticlesServer } from '../src/server/getRecentArticlesServer'
import { getProfileDataServer } from '../src/server/getProfileDataServer'

export default async function Page() {
    const [profileData, recentArticles] = await Promise.all([
        getProfileDataServer(),
        getRecentArticlesServer(),
    ])

    return (
        <HomePage
            initialProfileData={profileData}
            initialRecentArticles={recentArticles}
        />
    )
}
