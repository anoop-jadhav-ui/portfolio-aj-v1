import React, { ReactNode } from "react";
import "./Button.css";
import { IconType } from "react-icons";
interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "neutral" | "brand";
  Icon?: IconType;
  type?: "button" | "submit" | "reset" | undefined;
  testID?: string;
}
const Button = ({
  label,
  onClick,
  variant = "brand",
  Icon,
  type = "button",
  testID,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${variant} button ${label ? "with-label" : "no-label"}`}
      type={type}
      data-testid={testID}
    >
      {label && <span className="label">{label}</span>}
      {Icon && (
        <span className="icon">
          <Icon />
        </span>
      )}
    </button>
  );
};

export default Button;
