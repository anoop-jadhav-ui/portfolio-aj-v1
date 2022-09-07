import React from "react";
import "./ToggleButton.css";
interface ToggleButtonProps {
  onClick: () => void;
  value: boolean;
  trueLabel: string;
  falseLabel: string;
}
const ToggleButton = ({ onClick, value }: ToggleButtonProps) => {
  function clickHandler() {
    onClick();
  }
  return (
    <div
      id={value ? "on" : "off"}
      className="ToggleButton"
      onClick={clickHandler}
    >
      <div className="bar">
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default ToggleButton;
