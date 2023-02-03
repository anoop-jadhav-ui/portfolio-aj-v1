import React from "react";
import "./Copyright.scss";
export default function Copyright() {
  return (
    <div className="copyright">
      <span>
        All rights reserved <span className="primary-color">©</span> Anoop
        Jadhav
      </span>
      <span>{` ${new Date().getFullYear()}`}</span>
    </div>
  );
}
