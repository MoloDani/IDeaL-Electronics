import { useState } from "react";
import "./membri.css";
import Membru from "./Membru";

export interface Member {
  nume: string;
  functie: string;
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

      <div id="containerMemb">
        {membri.map((mem: Member) => (
          <Membru nume={mem.nume} functie={mem.functie} key={mem.nume} />
        ))}
      </div>
    </div>
  );
}

export default Membri;
