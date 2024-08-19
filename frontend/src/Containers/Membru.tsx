import { useState } from "react";
import "./membru.css";

export interface Member {
  nume: string;
  functie: string;
}

function Membru({ nume, functie }: Member) {
  return (
    <div className="membruCard">
      <h2>{nume}</h2>
      <h3>{functie}</h3>
    </div>
  );
}

export default Membru;
