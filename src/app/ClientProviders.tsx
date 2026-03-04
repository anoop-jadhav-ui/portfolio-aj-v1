'use client'

import React, { ReactNode } from 'react'
import { useEffect } from 'react'
import AlertBannerProvider from '../context/AlertBannerContext'
import { ProfileDataContextProvider } from '../context/ProfileDataContext'
import { RecentArticleContextProvider } from '../context/RecentArticleContext'
import { SectionInViewContextProvider } from '../context/SectionInViewContext'
import ThemeContextProvider from '../context/ThemeContext'
import { ProfileData, RecentArticle } from '../types/profileDataTypes'

import '../translations/i18next-config'

type ClientProvidersProps = {
    children: ReactNode
    initialProfileData?: ProfileData
    initialRecentArticles?: Array<RecentArticle>
}

const ClientProviders = ({
    children,
    initialProfileData,
    initialRecentArticles,
}: ClientProvidersProps) => {
    useEffect(() => {
        import('../gtm').then(({ initGtm }) => {
            initGtm()
        })
    }, [])

    return (
        <ThemeContextProvider>
            <ProfileDataContextProvider initialProfileData={initialProfileData}>
                <RecentArticleContextProvider
                    initialRecentArticles={initialRecentArticles}
                >
                    <SectionInViewContextProvider>
                        <AlertBannerProvider>{children}</AlertBannerProvider>
                    </SectionInViewContextProvider>
                </RecentArticleContextProvider>
            </ProfileDataContextProvider>
        </ThemeContextProvider>
    )
}

export default ClientProviders
