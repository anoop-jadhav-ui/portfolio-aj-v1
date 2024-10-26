import React, { useContext, useState } from 'react'
import Banner from '../components/Atoms/Banner/Banner'

export type AlertType = 'success' | 'info' | 'error'

interface LocalAlertBannerContext {
    isAlertBannerVisible: boolean
    type: AlertType
    message: string
    showAlertBanner: (type: AlertType, message: string) => void
    hideAlertBanner: () => void
}

export const LocalAlertBannerContext =
    React.createContext<LocalAlertBannerContext>({
        isAlertBannerVisible: false,
        type: 'info',
        message: '',
    } as LocalAlertBannerContext)

const LocalAlertBannerProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isAlertBannerVisible, toggleAlertBannerVisibility] = useState(false)
    const [type, setType] = useState<AlertType>('info')
    const [message, setMessage] = useState('')

    const showAlertBanner = (type: AlertType, message: string) => {
        toggleAlertBannerVisibility(true)
        setType(type)
        setMessage(message)
    }

    const hideAlertBanner = () => {
        toggleAlertBannerVisibility(false)
    }

    return (
        <LocalAlertBannerContext.Provider
            value={{
                type,
                message,
                isAlertBannerVisible,
                showAlertBanner,
                hideAlertBanner,
            }}
        >
            <Banner />
            {children}
        </LocalAlertBannerContext.Provider>
    )
}

export default LocalAlertBannerProvider
export const useLocaleAlertBanner = () => useContext(LocalAlertBannerContext)
