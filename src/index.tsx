import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App'
import './CommonStyles.css'
import Providers from './helpers/Providers'

const container = document.getElementById('root')
if (container) {
    const root = createRoot(container)
    root.render(
        <Providers>
            <App />
        </Providers>
    )
}
