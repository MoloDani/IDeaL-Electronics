import React from "react";
import { sez } from "./Sezoane";
import "./sezon.css";

// Asta e un card pentru un singru sezon

function Sezon({ numeSez, rezultate }: sez) {
  return (
    <div className="sezCard">
      <h1 id="textFade">{numeSez}</h1>
      {rezultate.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
}

export default Sezon;
