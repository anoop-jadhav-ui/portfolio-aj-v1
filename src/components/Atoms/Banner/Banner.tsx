import './Banner.scss'
import React from 'react'

export type BannerStatus = 'success' | 'neutral' | 'error'

interface BannerProps {
    type: BannerStatus
    text: string
    closeBanner: () => void
}
const Banner = ({ type = 'success', text, closeBanner }: BannerProps) => {
    return (
        <div
            className={`default-text banner ${type}-banner mb-2`}
            data-testid="banner"
        >
            <div className="banner-text" data-testid="banner-text">
                {text}
            </div>
            <div
                className="cross"
                onClick={closeBanner}
                data-testid="bannerclosebutton"
            />
        </div>
    )
}

export default Banner
