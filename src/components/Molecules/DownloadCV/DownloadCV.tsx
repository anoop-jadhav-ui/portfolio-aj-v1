import React from "react";
import { useTranslation } from "react-i18next";
import { CgSoftwareDownload } from "react-icons/cg";
import { downloadFile } from "../../../helpers/downloadFile";
import getResumeFileURL from "../../../helpers/getStorageFile";
import Button from "../../Atoms/Button/Button";
import "./DownloadCV.scss";

const DownloadCV = () => {
  const downloadCVHandler = async () => {
    const url = await getResumeFileURL;
    downloadFile(url, "ResumeAnoopJadhav.pdf");
  };
  const { t } = useTranslation();

  return (
    <div className="download-cv">
      <Button
        onClick={downloadCVHandler}
        variant="brand"
        Icon={CgSoftwareDownload}
        label={t("DOWNLOAD_CV")}
      />
    </div>
  );
};

export default DownloadCV;
