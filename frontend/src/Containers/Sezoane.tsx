import React from "react";
import Sezon from "./Sezon";
import "./sezoane.css";

// Aici vom scrie cod pentru tot display-ul de sezoane

export interface sez {
  numeSez: string;
  rezultate: string[];
}

function Sezoane() {
  let rez = [
    {
      numeSez: "DeepDown",
      rezultate: ["urmeaza", "unknown"],
    },
    {
      numeSez: "Covrigi",
      rezultate: ["loc 1", "fortza"],
    },
    {
      numeSez: "Altceva",
      rezultate: ["?!>?", "vom vedea ce va fi"],
    },
  ];

  return (
    <div className="container" id="sezoane">
      <div className="startText">
        <h3>SEZOANE</h3>
        <h2>Cu ce ne mandrim noi!</h2>
      </div>

      <div id="containerSez">
        {rez.map((sez: sez) => (
          <Sezon
            key={sez.numeSez}
            numeSez={sez.numeSez}
            rezultate={sez.rezultate}
          />
        ))}
      </div>
    </div>
  );
}

export default Sezoane;
