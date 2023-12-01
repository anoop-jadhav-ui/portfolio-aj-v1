import React from "react";
import "./Toggle.scss";

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
  onLabel: string;
  offLabel: string;
}

const Toggle = ({
  checked = false,
  onChange,
  onLabel = "ON",
  offLabel = "OFF",
}: ToggleProps) => {
  return (
    <div className="toggle-wrapper" role="checkbox" onClick={onChange}>
      <div className={`${checked && "highlight"} option`}>{onLabel}</div>
      <div className={`${!checked && "highlight"} option`}>{offLabel}</div>
    </div>
  );
};

export default Toggle;
