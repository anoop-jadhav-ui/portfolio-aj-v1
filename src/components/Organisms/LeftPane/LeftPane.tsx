import React from "react";
import "./LeftPane.css";
import ContactIcons from "../../Molecules/ContactIcons/ContactIcons";
import usePersistState from "../../../hooks/usePersistState";
import { useGlobalContext } from "../../../context/GlobalContext";

interface LeftPaneMenuItemProps {
  label: string;
}
const LeftPaneItem = ({ label }: LeftPaneMenuItemProps) => {
  return <li className="grey3">{label}</li>;
};

const LeftPane = () => {
  const [leftPaneVisible, setLeftPaneVisibility] = usePersistState(
    "leftPaneVisibility",
    false
  );
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
        <div className="toggle-button" onClick={toggleLeftPane}>
          <div className="arrow"></div>
        </div>
      </div>

      <ul className="menu body-text grey3">
        {leftPaneData.map((leftPaneItem) => {
          return (
            <LeftPaneItem key={leftPaneItem.id} label={leftPaneItem.label} />
          );
        })}
      </ul>
      <ContactIcons className="inside-leftpane" />
    </div>
  );
};

export default LeftPane;
export { LeftPane };
