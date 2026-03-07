const triggerDownload = (
    href: string,
    fileName: string,
    openInNewTab = false
) => {
    const anchor = document.createElement('a')
    anchor.href = href
    anchor.download = fileName
    if (openInNewTab) {
        anchor.target = '_blank'
        anchor.rel = 'noopener noreferrer'
    }
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
}

export async function downloadFile(url: string, fileName: string) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.status}`)
        }

        const blob = await response.blob()
        const objectUrl = window.URL.createObjectURL(blob)
        triggerDownload(objectUrl, fileName)
        window.URL.revokeObjectURL(objectUrl)
    } catch {
        // Fallback for cases where CORS prevents blob fetch.
        triggerDownload(url, fileName, true)
    }
}
