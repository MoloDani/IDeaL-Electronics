import { useState } from "react";
import "./hero.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div id="startingText">
        <h2>FTC ROBOTICS TEAM</h2>
        <h1 id="fade">IDeaL Electronics</h1>
        <h3>RO032</h3>
      </div>

      <div id="teamPhoto">
        <img className="image" src="\images\download.jpg" alt="team photo" />
      </div>
    </div>
  );
}

export default HeroSection;
