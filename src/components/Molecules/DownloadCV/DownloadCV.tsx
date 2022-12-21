import Button from '../../Atoms/Button/Button';
import { CgSoftwareDownload } from 'react-icons/cg';
import T from '../../../translations/en_IN';
import React from 'react';
import './DownloadCV.scss';
import getResumeFileURL from '../../../helpers/getStorageFile';
import { downloadFile } from '../../../helpers/downloadFile';

const DownloadCV = () => {
    const downloadCVHandler = async () => {
        const url = await getResumeFileURL;
        downloadFile(url, 'ResumeAnoopJadhav.pdf');
    };

    return (
        <div className="download-cv">
            <Button onClick={downloadCVHandler} variant="neutral" Icon={CgSoftwareDownload} label={T.DOWNLOAD_CV} />
        </div>
    );
};

export default DownloadCV;
