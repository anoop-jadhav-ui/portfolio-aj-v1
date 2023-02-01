import React from "react";
import { BiLeftArrow } from "react-icons/bi";

import { useGlobalContext } from "../../../context/GlobalContext";
import { useSectionInViewContext } from "../../../context/SectionInViewContext";
import usePersistState from "../../../hooks/usePersistState";
import LeftPaneItem from "../../Atoms/LeftPaneItem/LeftPaneItem";
import ContactIcons from "../../Molecules/ContactIcons/ContactIcons";
import "./LeftPane.scss";
const LeftPane = () => {
  const { leftPaneData } = useGlobalContext();
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
      className={`left-pane position-fixed d-none d-md-block ${
        leftPaneVisible ? "open" : "closed"
      }`}
    >
      <div className="left-pane-header-container">
        <div className="left-pane-header bold uppercase letterspacing-1">
          Skip to section
        </div>
        <div
          className="toggle-button"
          title="Toggle sidebar"
          onClick={toggleLeftPane}
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
