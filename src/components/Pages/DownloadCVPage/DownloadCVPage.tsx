import { Download } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { downloadCV } from '../../../helpers/downloadCV'
import Button from '../../Atoms/Button/Button'
import Header from '../../Molecules/Header/Header'
import styles from './DownloadCVPage.module.css'

const DownloadCVPage = () => {
    const { t } = useTranslation()
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Header />
            <div className={styles.pageContent}>
                <h1>Download Resume</h1>
                <Button
                    onClick={downloadCV}
                    variant="brand"
                    endIcon={<Download />}
                    label={t('button.downloadCv')}
                />
            </div>
        </div>
    )
}

export default DownloadCVPage
