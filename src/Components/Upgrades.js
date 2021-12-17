import React from "react";
import "../Styles/Upgrades.css";

export default function Upgrades(props) {
  const action = props.workerPerSecond === 0 ? "Buy" : "Upgrade";

  return (
    <div className="upgrades">
      <button onClick={props.onClick}>Upgrade ({props.cost})</button>

      <button onClick={props.onUpgradePerSecond}>
        {action} score (+{props.workerPerSecond}/s)({props.costPerSecond})
      </button>
    </div>
  );
}
