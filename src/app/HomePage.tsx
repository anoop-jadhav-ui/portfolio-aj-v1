import React from 'react'
import { ProfileData, RecentArticle } from '../types/profileDataTypes'
import ClientProviders from './ClientProviders'
import HomePageClient from './HomePageClient'

type HomePageProps = {
    initialProfileData: ProfileData
    initialRecentArticles: Array<RecentArticle>
}

const HomePage = ({ initialProfileData, initialRecentArticles }: HomePageProps) => {
    return (
        <ClientProviders
            initialProfileData={initialProfileData}
            initialRecentArticles={initialRecentArticles}
        >
            <HomePageClient />
        </ClientProviders>
    )
}

export default HomePage
