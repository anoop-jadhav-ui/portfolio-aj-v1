import "./BgAnimations.css";
import { useEffect, useState } from "react";
import PatternBox from "./PatternBox";
const BgAnimations = (props) => {
  return (
    <div className="background">
      <div className="boxes">
        <PatternBox
          className="first"
          color="#BDBDBD"
          boxsize="4"
          width="10"
          height="2"
          distanceBetweenBoxes="20"
          type="box"
        />
        <PatternBox
          className="second"
          color="#EB5757"
          boxsize="4"
          width="10"
          height="2"
          distanceBetweenBoxes="20"
          type="box"
        />
      </div>
    </div>
  );
};

export default BgAnimations;
