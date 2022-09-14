import React from "react";
import "./BarGraph.scss";

interface BarGraphProps {
  value: string;
  className?: string;
}
const BarGraph = ({ value, className }: BarGraphProps) => {
  return (
    <div className={`bar-graph ${className}`} data-testid="bar-graph">
      {value ? (
        <div
          data-testid="bar"
          className="filled"
          title={value + "%"}
          style={{ width: value + "%" }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default BarGraph;
