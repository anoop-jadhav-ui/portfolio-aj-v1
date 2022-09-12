import React from "react";
import "./LeftPane.css";
import ContactIcons from "../../Molecules/ContactIcons/ContactIcons";
import usePersistState from "../../../hooks/usePersistState";
import { useGlobalContext } from "../../../context/GlobalContext";
import LeftPaneItem from "../../Atoms/LeftPaneItem/LeftPaneItem";

const LeftPane = () => {
  const [leftPaneVisible, setLeftPaneVisibility] = usePersistState(
    "leftPaneVisibility",
    false
  );
  const { currentSectionInView } = useGlobalContext();
  const toggleLeftPane = () => {
    setLeftPaneVisibility(!leftPaneVisible);
  };

  const { leftPaneData } = useGlobalContext();
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
          <div className="arrow" />
        </div>
      </div>

      <ul className="menu body-text grey3">
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
