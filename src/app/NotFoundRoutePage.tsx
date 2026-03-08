'use client'

import NotFoundPage from '../components/Pages/NotFoundPage/NotFoundPage'
import ClientProviders from './ClientProviders'

const NotFoundRoutePage = () => {
    return (
        <ClientProviders>
            <NotFoundPage />
        </ClientProviders>
    )
}

export default NotFoundRoutePage
