import './DownloadCV.scss'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { CgSoftwareDownload } from 'react-icons/cg'
import { downloadFile } from '../../../helpers/downloadFile'
import getResumeFileURL from '../../../helpers/getStorageFile'
import Button from '../../Atoms/Button/Button'

const DownloadCV = () => {
    const downloadCVHandler = async () => {
        const url = await getResumeFileURL
        downloadFile(url, 'ResumeAnoopJadhav.pdf')
    }
    const { t } = useTranslation()

    return (
        <div className="download-cv">
            <Button
                onClick={downloadCVHandler}
                variant="brand"
                Icon={CgSoftwareDownload}
                label={t('button.downloadCv')}
            />
        </div>
    )
}

export default DownloadCV
