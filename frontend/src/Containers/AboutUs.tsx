import { useState } from "react";
import Blob from "./Blob";

function AboutUs() {
  return (
    <div className="container" id="about">
      <Blob topOffset={100} leftOffset={-70} />
      <div className="startText">
        <h3>CU CE NE OCUPĂM</h3>
        <h2>Despre noi</h2>
        <p className="longText">
          Suntem IDeaL Electronics, o echipă de robotică din Cugir, pasionată de
          tehnologie și inovare. Compusă din elevi dedicați și mentori
          entuziaști, echipa noastră a obținut rezultate remarcabile în
          competițiile naționale și internaționale de robotică. Ne dorim să
          inspirăm tinerii să exploreze știința, tehnologia, ingineria și
          matematica, dezvoltând abilități valoroase într-un mediu creativ și
          colaborativ. Suntem mereu deschiși să învățăm, să inovăm și să ne
          depășim limitele, construind împreună roboții viitorului.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
