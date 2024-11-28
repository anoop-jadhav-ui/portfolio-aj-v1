import { Download } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { downloadCV } from '../../../helpers/downloadCV'
import Button from '../../Atoms/Button/Button'

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
            <Button
                onClick={downloadCV}
                variant="brand"
                endIcon={<Download />}
                label={t('button.downloadCv')}
            />
        </div>
    )
}

export default DownloadCVPage
