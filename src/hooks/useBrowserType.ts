import { useEffect, useState } from 'react'

const useBrowserType = () => {
    const [browserName, setBrowserName] = useState('none')

    useEffect(() => {
        const userAgent = navigator.userAgent
        let detectedBrowser = 'none'
        if (userAgent.match(/chrome|chromium|crios/i)) {
            detectedBrowser = 'chrome'
        } else if (userAgent.match(/firefox|fxios/i)) {
            detectedBrowser = 'firefox'
        } else if (userAgent.match(/safari/i)) {
            detectedBrowser = 'safari'
        } else if (userAgent.match(/opr\//i)) {
            detectedBrowser = 'opera'
        } else if (userAgent.match(/edg/i)) {
            detectedBrowser = 'edge'
        }
        setBrowserName(detectedBrowser)
    }, [])

    return browserName
}

export default useBrowserType
