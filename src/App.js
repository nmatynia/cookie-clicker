import React from "react";
import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Cookie from "./Components/Cookie";
import Upgrades from "./Components/Upgrades";
import Stats from "./Components/Stats";

export default function App() {
  const [counter, setCounter] = useState(1);
  const [upgrade, setUpgrade] = useState(1);
  const [cost, setCost] = useState(10);

  const handleClick = () => {
    setCounter(counter + upgrade);
  };

  const handleUpgrade = () => {
    if (counter >= cost) {
      setCounter(counter - cost);
      setUpgrade(upgrade + 1);
      setCost(Math.round(cost * 2));
    }
  };
  return (
    <div className="App">
      <Upgrades onClick={handleUpgrade} cost={cost} />
      <Cookie onClick={handleClick} />
      <Stats counter={counter} upgrade={upgrade} />
    </div>
  );
}
