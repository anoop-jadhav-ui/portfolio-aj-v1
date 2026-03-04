export function initGtm() {
    const gtagId = process.env.NEXT_PUBLIC_GTAG_ID

    if (typeof document === 'undefined' || !gtagId) {
        return
    }

    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtagId}');
  `
    document.head.appendChild(script2)
}
