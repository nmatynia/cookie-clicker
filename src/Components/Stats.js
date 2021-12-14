import React from "react";
import "../Styles/Stats.css";

export default function Stats(props) {
  return (
    <div className="stats">
      Currently power: {props.upgrade}
      <br />
      Score: {props.counter}
      <br />
    </div>
  );
}
