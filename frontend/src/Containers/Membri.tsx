import { useState, useEffect } from "react";
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
  const [backendData, setBackendData] = useState([[]]);

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBackendData(data);
      });
  }, []);

  return (
    <div className="container" id="members">
      <div className="startText">
        <h3>MEMBRI</h3>
        <h2>Sa ne cunoastem mai bine!</h2>
      </div>

      <div className="containerMemb">
        {backendData.map((membru, index) => (
          <Membru
            key={index}
            poza={"./images/membrii/" + membru.nume + ".jpg"}
            nume={membru.nume}
            functie={membru.functie}
            tip=""
          />
        ))}

        <button className="slideButton" id="left"></button>
        <button className="slideButton" id="right"></button>
      </div>
    </div>
  );
}

export default Membri;
