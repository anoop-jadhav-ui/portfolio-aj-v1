import React from "react";
import "./BarGraph.scss";

interface BarGraphProps {
  value: string;
  className?: string;
  animate?: boolean;
}
const BarGraph = ({ value, className = "", animate }: BarGraphProps) => {
  const valuePercentage = `${value}%`;

  return (
    <div className={`bar-graph ${className}`} data-testid="bar-graph">
      {value ? (
        <div
          data-testid="bar"
          className="filled"
          title={valuePercentage}
          style={{ width: animate ? valuePercentage : "0%" }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default BarGraph;
