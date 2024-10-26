import React from 'react'
import { useLocaleAlertBanner } from '../../../context/LocalAlertBannerContext'
import './LocalBanner.scss'

const LocalBanner = () => {
    const { type, message, isAlertBannerVisible, hideAlertBanner } =
        useLocaleAlertBanner()

    if (!isAlertBannerVisible) return null

    return (
        <div
            className={`default-text local-banner ${type}-banner mb-2`}
            role="alertdialog"
            data-testid="banner"
        >
            <div className="banner-text" role="alert">
                {message}
            </div>
            <div className="cross" onClick={hideAlertBanner} role="button" />
        </div>
    )
}

export default LocalBanner
