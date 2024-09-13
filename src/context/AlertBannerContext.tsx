import React, { useContext, useState } from 'react'
import Banner from '../components/Atoms/Banner/Banner'

export type AlertType = 'success' | 'info' | 'error'

interface AlertBannerContext {
    isAlertBannerVisible: boolean
    type: AlertType
    message: string
    showAlertBanner: (type: AlertType, message: string) => void
    hideAlertBanner: () => void
}

export const AlertBannerContext = React.createContext<AlertBannerContext>({
    isAlertBannerVisible: false,
    type: 'info',
    message: '',
} as AlertBannerContext)

const AlertBannerProvider = ({ children }: { children: React.ReactNode }) => {
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
        <AlertBannerContext.Provider
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
        </AlertBannerContext.Provider>
    )
}

export default AlertBannerProvider
export const useAlertBanner = () => useContext(AlertBannerContext)
