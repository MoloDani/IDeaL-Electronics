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
  const [cur, setCur] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const normalize = (x: number) => {
    if (x < 0) return x + backendData.length;
    if (x >= backendData.length) return x - backendData.length;
    return x;
  };

  const cardType = (curInd: number, ind: number) => {
    const next = normalize(cur + 1);
    const prev = normalize(cur - 1);
    const outPrev = normalize(cur - 2);
    const outNext = normalize(cur + 2);

    if (ind === curInd) return "center";
    if (ind === next) return "side left";
    if (ind === prev) return "side right";
    if (ind === outPrev) return "side prev";
    if (ind === outNext) return "side next";
    return "outside";
  };

  const setImgId = (id: number, offset: number) => {
    id += offset;
    id = normalize(id);

    setCur(id);
  };

  return (
    <div className="container" id="members">
      <div className="startText">
        <h3>MEMBRI</h3>
        <h2>Sa ne cunoastem mai bine!</h2>
      </div>

      <div className="containerMemb">
        {backendData.map((membru, i) => (
          <Membru
            key={i}
            poza={membru.img}
            nume={membru.name}
            functie={membru.fct}
            tip={cardType(cur, i)}
          />
        ))}

        <button
          className="arrow"
          id="left"
          onClick={() => setImgId(cur, -1)}
        ></button>
        <button
          className="arrow"
          id="right"
          onClick={() => setImgId(cur, +1)}
        ></button>
      </div>
    </div>
  );
}

export default Membri;
