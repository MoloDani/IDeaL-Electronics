import { useState, useEffect } from "react";
import "./membri.css";
import Card from "./Card";

export interface Member {
  poza: string;
  nume: string;
  functie: string;
  tip: string;
  links: string[];
  types: string[];
}

export interface dataBase {
  ID: number;
  name: string;
  fct: string;
  mentor: boolean;
  img: string;
  link1: string;
  type1: string;
  link2: string;
  type2: string;
  link3: string;
  type3: string;
}

function Membri() {
  const [backendData, setBackendData] = useState<dataBase[]>([]);
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

  const cardType = (ind: number) => {
    const next = normalize(cur - 1);
    const prev = normalize(cur + 1);
    const outPrev = normalize(cur + 2);
    const outNext = normalize(cur - 2);

    if (ind === cur) return "center";
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
        <h2>Să ne cunoaștem mai bine!</h2>
      </div>

      <div className="containerCards">
        <div className="containerMemb">
          {backendData.map((membru: dataBase, i) => (
            <Card
              key={i}
              poza={membru.img}
              nume={membru.name}
              functie={membru.fct}
              tip={cardType(i)}
              links={[membru.link1, membru.link2, membru.link3]}
              types={[membru.type1, membru.type2, membru.type3]}
            />
          ))}
        </div>
        <button className="button" id="left" onClick={() => setImgId(cur, -1)}>
          <img src=".\images\right-arrow.png" alt="" />
        </button>
        <button className="button" id="right" onClick={() => setImgId(cur, +1)}>
          <img src=".\images\right-arrow.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Membri;
