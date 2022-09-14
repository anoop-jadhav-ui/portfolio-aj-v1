import React from "react";
import * as S from "./BarGraph.styles";

interface BarGraphProps {
  value: string;
}

const BarGraph = ({ value }: BarGraphProps) => {
  return (
    <S.BarGraph data-testid="bar-graph">
      {value ? (
        <S.Bar
          data-testid="bar"
          title={value + "%"}
          style={{ width: value + "%" }}
        />
      ) : (
        ""
      )}
    </S.BarGraph>
  );
};

export default BarGraph;
