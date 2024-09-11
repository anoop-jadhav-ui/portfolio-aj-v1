import { useMemo } from 'react'

const useBrowserType = () => {
    return useMemo(() => {
        const userAgent = navigator.userAgent
        let browserName = 'none'
        if (userAgent.match(/chrome|chromium|crios/i)) {
            browserName = 'chrome'
        } else if (userAgent.match(/firefox|fxios/i)) {
            browserName = 'firefox'
        } else if (userAgent.match(/safari/i)) {
            browserName = 'safari'
        } else if (userAgent.match(/opr\//i)) {
            browserName = 'opera'
        } else if (userAgent.match(/edg/i)) {
            browserName = 'edge'
        }
        return browserName
    }, [])
}

export default useBrowserType
