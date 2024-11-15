import React from 'react'
import { useAlertBanner } from '../../../context/AlertBannerContext'
import './Banner.css'

export type BannerStatus = 'success' | 'neutral' | 'error'

const Banner = () => {
    const { type, message, isAlertBannerVisible, hideAlertBanner } =
        useAlertBanner()

    if (!isAlertBannerVisible) return null

    return (
        <div
            className={`default-text banner ${type}-banner mb-2`}
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

export default Banner
