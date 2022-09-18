import React, { useState } from "react";
import "./Button.scss";
import { IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: "neutral" | "brand" | "base";
  Icon?: IconType;
  type?: "button" | "submit" | "reset" | undefined;
  testID?: string;
  className?: string;
}

interface ClickPosition {
  x: number;
  y: number;
}

const Button = ({
  label,
  onClick,
  variant = "brand",
  Icon,
  type = "button",
  testID,
  className,
}: ButtonProps) => {
  const [clickPosition, setCickPosition] = useState<ClickPosition>();

  const animateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget.getBoundingClientRect();
    setCickPosition({
      x: e.clientX - button.x,
      y: e.clientY - button.y,
    });
    onClick && onClick();
  };

  return (
    <button
      onClick={animateClick}
      className={`${variant} button ${className} ${
        label ? "with-label" : "no-label"
      }`}
      type={type}
      data-testid={testID}
      style={
        {
          "--button-x": clickPosition?.x,
          "--button-y": clickPosition?.y,
        } as React.CSSProperties
      }
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
