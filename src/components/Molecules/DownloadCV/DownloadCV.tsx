import './DownloadCV.css'

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CgSoftwareDownload } from 'react-icons/cg'
import { downloadFile } from '../../../helpers/downloadFile'
import getResumeFileURL from '../../../helpers/getStorageFile'
import Button from '../../Atoms/Button/Button'
import DownloadDialog from '../../Atoms/DownloadDialog/DownloadDialog'

const DownloadCV = () => {
    const { t } = useTranslation()
    const [isDialogOpen, toggleDialogVisibility] = useState(false)

    const openDialog = () => toggleDialogVisibility(true)
    const closeDialog = () => toggleDialogVisibility(false)

    const downloadCVHandler = async () => {
        const url = await getResumeFileURL
        downloadFile(url, 'ResumeAnoopJadhav.pdf')
    }

    return (
        <div className="download-cv">
            <Button
                onClick={openDialog}
                variant="brand"
                Icon={CgSoftwareDownload}
                label={t('button.downloadCv')}
            />
            {isDialogOpen && (
                <DownloadDialog
                    open={isDialogOpen}
                    onClose={closeDialog}
                    onDownload={downloadCVHandler}
                />
            )}
        </div>
    )
}

export default DownloadCV
