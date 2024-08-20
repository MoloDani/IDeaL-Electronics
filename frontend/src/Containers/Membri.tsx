import { useState } from "react";
import "./membri.css";
import Membru from "./Membru";

export interface Member {
  poza: string;
  nume: string;
  functie: string;
  tip: string;
  id?: string;
}

function Membri() {
  let membri = [
    { nume: "Daniel", functie: "programare" },
    { nume: "Darius", functie: "programare" },
    { nume: "Tudor", functie: "mecanica" },
    { nume: "Georgiana", functie: "PR" },
  ];

  return (
    <div className="container" id="members">
      <div className="startText">
        <h3>MEMBRI</h3>
        <h2>Sa ne cunoastem mai bine!</h2>
      </div>

      <div className="containerMemb">
        <Membru
          key={1}
          poza="./images/download.jpg"
          nume="Georgi"
          functie="PR"
          tip="side"
        />

        <Membru
          key={2}
          poza="./images/membrii/daniel.jpg"
          nume="Daniel"
          functie="programare"
          tip="center"
        />

        <Membru
          key={3}
          poza="./images/download.jpg"
          nume="Tudor"
          functie="programare"
          tip="side"
        />

        <button className="slideButton" id="left"></button>
        <button className="slideButton" id="right"></button>
      </div>
    </div>
  );
}

export default Membri;
