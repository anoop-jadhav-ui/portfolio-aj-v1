export function initGtm() {
    const gtagId = process.env.NEXT_PUBLIC_GTAG_ID

    if (typeof document === 'undefined' || !gtagId) {
        return
    }

    const globalWindow = window as Window & { __portfolioGtmInitialized?: boolean }
    if (globalWindow.__portfolioGtmInitialized) {
        return
    }

    const existingScript = document.querySelector(
        `script[data-gtm-id="${gtagId}"]`
    )
    if (existingScript) {
        globalWindow.__portfolioGtmInitialized = true
        return
    }

    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
    script1.dataset.gtmId = gtagId
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtagId}');
  `
    script2.dataset.gtmInline = gtagId
    document.head.appendChild(script2)
    globalWindow.__portfolioGtmInitialized = true
}
