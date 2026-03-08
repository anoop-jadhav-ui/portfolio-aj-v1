import { ArrowLeft, CalendarClock, Download, LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAlertBanner } from '../../../context/AlertBannerContext'
import { getCVLastUpdatedAt, getCVUrl } from '../../../helpers/downloadCV'
import { downloadFile } from '../../../helpers/downloadFile'
import Button from '../../Atoms/Button/Button'
import Header from '../../Molecules/Header/Header'
import styles from './DownloadCVPage.module.css'

const DownloadCVPage = () => {
    const { t } = useTranslation()
    const { showAlertBanner } = useAlertBanner()
    const [isLoading, setLoading] = useState(false)
    const [lastUpdatedAt, setLastUpdatedAt] = useState<string | null>(null)

    useEffect(() => {
        let isMounted = true
        getCVLastUpdatedAt().then((updatedAt) => {
            if (isMounted) {
                setLastUpdatedAt(updatedAt)
            }
        })

        return () => {
            isMounted = false
        }
    }, [])

    const formattedLastUpdated = useMemo(() => {
        if (!lastUpdatedAt) {
            return null
        }

        const parsedDate = new Date(lastUpdatedAt)
        if (Number.isNaN(parsedDate.getTime())) {
            return null
        }

        return new Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        }).format(parsedDate)
    }, [lastUpdatedAt])

    const handleDownload = async () => {
        try {
            setLoading(true)
            const cvUrl = await getCVUrl()
            await downloadFile(cvUrl, 'ResumeAnoopJadhav.pdf')
            showAlertBanner('success', 'Resume download started.')
        } catch (error) {
            console.error('Error downloading CV:', error)
            showAlertBanner('error', "Couldn't start download. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={styles.pageWrapper}>
            <div className="app-container">
                <Header />
                <div className={styles.pageContent}>
                    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                        <Link href="/" className={styles.breadcrumbLink}>
                            Home
                        </Link>
                        <span className={styles.breadcrumbDivider}>/</span>
                        <span className={styles.breadcrumbCurrent}>Download</span>
                    </nav>
                    <div className={styles.titleRow}>
                        <div className="section-title h2 bold">
                            <span>Download Resume</span>
                        </div>
                    </div>
                    <p className="body-text grey5">
                        Utility page for downloading your latest resume.
                    </p>
                    {formattedLastUpdated && (
                        <div className={styles.metaRow}>
                            <CalendarClock size={18} />
                            <span className="label grey6">
                                Last updated: {formattedLastUpdated}
                            </span>
                        </div>
                    )}
                    <div className={styles.actions}>
                        <Button
                            onClick={handleDownload}
                            variant="brand"
                            className={isLoading ? 'loading' : ''}
                            disabled={isLoading}
                            endIcon={isLoading ? <LoaderCircle /> : <Download />}
                            label={t('button.downloadCv')}
                        />
                    </div>
                    <Link href="/" className={styles.homeLink}>
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DownloadCVPage
