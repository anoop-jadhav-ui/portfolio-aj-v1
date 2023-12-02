import "./LeftPane.scss";

import React from "react";
import { useTranslation } from "react-i18next";
import { BiLeftArrow } from "react-icons/bi";
import { useProfileDataContext } from "../../../context/ProfileDataContext";
import { useSectionInViewContext } from "../../../context/SectionInViewContext";
import usePersistState from "../../../hooks/usePersistState";
import LeftPaneItem from "../../Atoms/LeftPaneItem/LeftPaneItem";
import ContactIcons from "../../Molecules/ContactIcons/ContactIcons";

const LeftPane = () => {
  const { t } = useTranslation();
  const { leftPaneData } = useProfileDataContext();
  const { currentSectionInView } = useSectionInViewContext();
  const [leftPaneVisible, setLeftPaneVisibility] = usePersistState(
    "leftPaneVisibility",
    false
  );

  const toggleLeftPane = () => {
    setLeftPaneVisibility(!leftPaneVisible);
  };

  return (
    <div
      className={`left-pane position-fixed ${
        leftPaneVisible ? "open" : "closed"
      }`}
    >
      <div className="left-pane-header-container">
        <div className="left-pane-header bold uppercase letterspacing-1">
          {t("skipToSection")}
        </div>
        <div
          className="toggle-button"
          title="Toggle sidebar"
          onClick={toggleLeftPane}
          onKeyDown={toggleLeftPane}
          tabIndex={0}
          aria-label="skip to section toggle"
        >
          <BiLeftArrow className="arrow" title="toggle leftpane" />
        </div>
      </div>

      <ul className="menu body-text grey5">
        {leftPaneData.map((leftPaneItem) => {
          return (
            <LeftPaneItem
              key={leftPaneItem.id}
              label={leftPaneItem.label}
              isSelected={currentSectionInView === leftPaneItem.class}
              sectionClass={leftPaneItem.class}
            />
          );
        })}
      </ul>
      <ContactIcons className="inside-leftpane" />
    </div>
  );
};

export default LeftPane;
export { LeftPane };
