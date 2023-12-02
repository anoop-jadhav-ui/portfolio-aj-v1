import Styles from "./TopMateSection.module.css";

import React from "react";
import { useTranslation } from "react-i18next";
import { MdArrowRightAlt } from "react-icons/md";
import UseAnimations from "react-useanimations";
import alertCircle from "react-useanimations/lib/alertCircle";

const TopMateSection = () => {
  const { t } = useTranslation();
  return (
    <div className={Styles.topmateSection}>
      <UseAnimations
        size={48}
        animation={alertCircle}
        strokeColor="var(--orange)"
      />
      <span>{t("topMateInfo")}</span>
      <MdArrowRightAlt
        size={32}
        color="var(--orange)"
        className={Styles.rightArrow}
      />
    </div>
  );
};

export default TopMateSection;
