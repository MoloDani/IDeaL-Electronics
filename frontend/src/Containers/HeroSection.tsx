import { useState } from "react";
import "./hero.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div id="startingText">
        <h1 className="subHeading">FTC ROBOTICS TEAM</h1>
        <h1 id="textFade">IDeaL Electronics</h1>
        <h2>RO032</h2>
      </div>

      <div id="teamPhoto">
        <img className="image" src="\images\download.jpg" alt="team photo" />
      </div>

      <div className="bottomLine">
        <hr></hr>
      </div>
    </div>
  );
}

export default HeroSection;
