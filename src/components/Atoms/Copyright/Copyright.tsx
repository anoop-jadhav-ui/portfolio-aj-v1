import React from "react";
import "./Copyright.scss";
export default function Copyright() {
  return (
    <div className="copyright">
      <span>Copyright &copy; {new Date().getFullYear()} Anoop Jadhav</span>
    </div>
  );
}
