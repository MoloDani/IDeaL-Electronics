import React from "react";
import Sezon from "./Sezon";
import "./sezoane.css";

// Aici vom scrie cod pentru tot display-ul de sezoane

export interface sez {
  numeSez: string;
  rezultate: string[];
}

interface Props {
  sezoane: sez[];
}

function Sezoane() {
  let rez = ["nimic", "wow"];

  return (
    <div className="container" id="sezoane">
      <div className="startText">
        <h3>SEZOANE</h3>
        <h2>Cu ce ne mandrim noi</h2>
      </div>

      <div id="containerSez">
        <Sezon numeSez="DeepDown" rezultate={rez} />
      </div>
    </div>
  );
}

export default Sezoane;
