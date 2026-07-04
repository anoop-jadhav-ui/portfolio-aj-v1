'use client'

import Clarity from '@microsoft/clarity'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PageScrollProgressBar from 'react-page-scroll-progress-bar'
import dynamic from 'next/dynamic'
import ErrorBoundary from '../components/Molecules/ErrorBoundary/ErrorBoundary'

const Stars = dynamic(() => import('../components/Molecules/Stars/Stars'), {
    ssr: false,
})
import LandingPage from '../components/Pages/LandingPage/LandingPage'

const HomePageClient = () => {
    const { t } = useTranslation()
    const appRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID
        if (clarityId) {
            const globalWindow = window as Window & {
                __portfolioClarityInitialized?: boolean
            }
            if (globalWindow.__portfolioClarityInitialized) {
                return
            }
            Clarity.init(clarityId)
            globalWindow.__portfolioClarityInitialized = true
        }
    }, [])

    return (
        <ErrorBoundary errorMessage={t('pageLoadError')}>
            <Stars />
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

export default HomePageClient
