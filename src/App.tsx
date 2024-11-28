import './translations/i18next-config' // This import should be always at the top of the file

import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PageScrollProgressBar from 'react-page-scroll-progress-bar'
import { Route, Routes } from 'react-router'
import ErrorBoundary from './components/Molecules/ErrorBoundary/ErrorBoundary'
import { Stars } from './components/Molecules/Stars/Stars'
import DownloadCV from './components/Pages/DownloadCVPage/DownloadCVPage'
import LandingPage from './components/Pages/LandingPage/LandingPage'
import AlertBannerProvider from './context/AlertBannerContext'

export const App = () => {
    const { t } = useTranslation()
    const AppRef = useRef<HTMLDivElement>(null)

    return (
        <ErrorBoundary errorMessage={t('pageLoadError')}>
            <AlertBannerProvider>
                <PageScrollProgressBar
                    container={AppRef.current}
                    bgColor="transparent"
                    color="var(--primary-color)"
                />
                <Stars />
                <div className="app-container" ref={AppRef}>
                    <Routes>
                        <Route index element={<LandingPage />} />
                        <Route path="download" element={<DownloadCV />} />
                    </Routes>
                </div>
            </AlertBannerProvider>
        </ErrorBoundary>
    )
}

export default App
