import React from "react";
import styles from "./ToggleButton.module.css";
interface ToggleButtonProps {
  onClick: () => void;
  value: boolean;
}
const ToggleButton = ({ onClick, value }: ToggleButtonProps) => {
  function clickHandler() {
    onClick();
  }
  return (
    <div
      id={value ? "on" : "off"}
      className={styles.toggleButton}
      onClick={clickHandler}
    >
      <div className={styles.bar}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default ToggleButton;
