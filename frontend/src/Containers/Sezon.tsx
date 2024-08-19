import React, { useEffect, useState } from "react";
import { sez } from "./Sezoane";
import "./sezon.css";

// Asta e un card pentru un singru sezon

function Sezon({ numeSez, rezultate }: sez) {
  return (
    <div className="sezCard">
      <div className="logoSez">
        <h1>{numeSez}</h1>
      </div>
      {rezultate.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

export default Sezon;
