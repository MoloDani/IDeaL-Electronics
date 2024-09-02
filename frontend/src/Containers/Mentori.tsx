import { useState, useEffect } from "react";
import "./mentori.css";
import Card from "./Card";
import { Member } from "./Membri";

function Mentori() {
  const [backendData, setBackendData] = useState<Member[]>([]);
  const [cur, setCur] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/mentors")
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

    if (ind === cur) return "centerMent";
    if (ind === next) return "sideMent leftMent";
    if (ind === prev) return "sideMent rightMent";
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
    <div className="container" id="mentors">
      <div className="startText">
        <h3>MENTORI</h3>
        <h2>Cine ne ajută?</h2>
      </div>

      <div className="containerCards">
        <div className="containerMent">
          {backendData.map((membru, i) => (
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

export default Mentori;
