import React, { ReactNode } from 'react'
import { BrowserRouter } from 'react-router'
import { ProfileDataContextProvider } from '../context/ProfileDataContext'
import { RecentArticleContextProvider } from '../context/RecentArticleContext'
import { SectionInViewContextProvider } from '../context/SectionInViewContext'
import ThemeContextProvider from '../context/ThemeContext'

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <ThemeContextProvider>
            <ProfileDataContextProvider>
                <RecentArticleContextProvider>
                    <SectionInViewContextProvider>
                        <BrowserRouter>{children}</BrowserRouter>
                    </SectionInViewContextProvider>
                </RecentArticleContextProvider>
            </ProfileDataContextProvider>
        </ThemeContextProvider>
    )
}

export default Providers
