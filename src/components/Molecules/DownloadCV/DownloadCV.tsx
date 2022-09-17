import Button from "../../Atoms/Button/Button";
import { CgSoftwareDownload } from "react-icons/cg";
import T from "../../../translations/en_IN";
import React from "react";
import "./DownloadCV.scss";
import getResumeFileURL from "../../../helpers/getStorageFile";
import { downloadFile } from "../../../helpers/downloadFile";
import { useTheme } from "../../../context/ThemeContext";

const DownloadCV = () => {
  const { isMobile } = useTheme();
  const downloadCVHandler = async () => {
    const url = await getResumeFileURL;
    downloadFile(url, "ResumeAnoopJadhav.pdf");
  };

  return (
    <div className={`download-cv ${isMobile ? "mobile" : "desktop"}`}>
      <Button
        onClick={downloadCVHandler}
        variant="neutral"
        Icon={CgSoftwareDownload}
        label={!isMobile ? T.DOWNLOAD_CV : undefined}
      />
    </div>
  );
};

export default DownloadCV;
