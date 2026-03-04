import Clarity from '@microsoft/clarity'
import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PageScrollProgressBar from 'react-page-scroll-progress-bar'
import ErrorBoundary from './components/Molecules/ErrorBoundary/ErrorBoundary'
import LandingPage from './components/Pages/LandingPage/LandingPage'

const App = () => {
    const { t } = useTranslation()
    const appRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID
        if (clarityId) {
            Clarity.init(clarityId)
        }
    }, [])

    return (
        <ErrorBoundary errorMessage={t('pageLoadError')}>
            <PageScrollProgressBar
                container={appRef.current}
                bgColor="transparent"
                color="var(--primary-color)"
            />
            <div className="app-container" ref={appRef}>
                <LandingPage />
            </div>
        </ErrorBoundary>
    )
}

export default App
