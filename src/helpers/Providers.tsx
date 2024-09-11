import { ProfileDataContextProvider } from '../context/ProfileDataContext'
import React, { ReactNode } from 'react'
import ThemeContextProvider from '../context/ThemeContext'
import { SectionInViewContextProvider } from '../context/SectionInViewContext'
import { RecentArticleContextProvider } from '../context/RecentArticleContext'

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeContextProvider>
            <ProfileDataContextProvider>
                <RecentArticleContextProvider>
                    <SectionInViewContextProvider>
                        {children}
                    </SectionInViewContextProvider>
                </RecentArticleContextProvider>
            </ProfileDataContextProvider>
        </ThemeContextProvider>
    )
}

export default Providers
