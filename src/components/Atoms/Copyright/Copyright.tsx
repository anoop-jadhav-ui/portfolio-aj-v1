import React from "react";
import "./Copyright.scss";
export default function Copyright() {
  return (
    <div className="copyright">
      {`All rights reserved © Anoop Jadhav ${new Date().getFullYear()}`}
    </div>
  );
}
