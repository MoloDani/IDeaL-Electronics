import { useState } from "react";
import "./hero.css";

function HeroSection() {
  const [number, editNumber] = useState("RO032");

  return (
    <div className="container" id="hero">
      <div className="startText" id="numeEchipa">
        <h3>FTC ROBOTICS TEAM</h3>
        <h1 id="textFade">IDeaL Electronics</h1>
        <h2 id="teamNumber">{number}</h2>
      </div>
      <div className="imagine" id="teamPhoto">
        <img src="\images\download.jpg" alt="team photo" />
      </div>
    </div>
  );
}

export default HeroSection;
