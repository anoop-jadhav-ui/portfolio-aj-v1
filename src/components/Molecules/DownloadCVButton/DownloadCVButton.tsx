import './DownloadCVButton.css'

import { Download } from 'lucide-react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { downloadCV } from '../../../helpers/downloadCV'
import Button from '../../Atoms/Button/Button'
import DownloadDialog from '../../Atoms/DownloadDialog/DownloadDialog'

const DownloadCVButton = () => {
    const { t } = useTranslation()
    const [isDialogOpen, toggleDialogVisibility] = useState(false)

    const openDialog = () => toggleDialogVisibility(true)
    const closeDialog = () => toggleDialogVisibility(false)

    return (
        <div className="download-cv-button">
            <Button
                onClick={openDialog}
                variant="brand"
                endIcon={<Download />}
                label={t('button.downloadCv')}
            />
            {isDialogOpen && (
                <DownloadDialog
                    open={isDialogOpen}
                    onClose={closeDialog}
                    onDownload={downloadCV}
                />
            )}
        </div>
    )
}

export default DownloadCVButton
