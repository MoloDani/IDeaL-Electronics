import { useEffect, useState } from "react";
import "./sponsori.css";

interface spons {
  ID: number;
  name: string;
  link: string;
  img: string;
}

function Sponsori() {
  const [backendData, setBackendData] = useState<spons[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/sponsori")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="container" id="sponsori">
      <div className="startText">
        <h3>SPONSORI</h3>
        <h2>Fără ei nu reușeam!</h2>

        <div className="containerSpons">
          {backendData.map((item, i) => (
            <a href={item.link} target="_blank">
              <img
                src={"data:image/jpeg;base64, " + item.img}
                alt={item.name}
                key={item.ID}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsori;
