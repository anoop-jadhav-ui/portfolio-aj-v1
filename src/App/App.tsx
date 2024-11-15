import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PageScrollProgressBar from 'react-page-scroll-progress-bar'
import Copyright from '../components/Atoms/Copyright/Copyright'
import ErrorBoundary from '../components/Molecules/ErrorBoundary/ErrorBoundary'
import LeftPane from '../components/Organisms/LeftPane/LeftPane'
import MainBody from '../components/Organisms/MainBody/MainBody'
import Stars from '../components/Organisms/Stars/Stars'
import AlertBannerProvider from '../context/AlertBannerContext'
import { useProfileDataContext } from '../context/ProfileDataContext'
import { useTheme } from '../context/ThemeContext'
import '../translations/i18next-config'
import './App.css'

export const App = () => {
    const { isMobile } = useTheme()
    const { leftPaneData } = useProfileDataContext()
    const AppRef = useRef<HTMLDivElement>(null)
    const { t } = useTranslation()

    return (
        <ErrorBoundary errorMessage={t('pageLoadError')}>
            <AlertBannerProvider>
                <PageScrollProgressBar
                    container={AppRef.current}
                    bgColor="transparent"
                    color="var(--primary-color)"
                />
                <Stars />
                <div
                    className="App row no-gutters fade show justify-content-center"
                    ref={AppRef}
                >
                    {!isMobile && leftPaneData && <LeftPane />}
                    <MainBody />
                </div>
                <Copyright />
            </AlertBannerProvider>
        </ErrorBoundary>
    )
}

export default App
