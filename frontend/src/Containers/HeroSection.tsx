import { useState } from "react";
import "./hero.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div id="startingText">
        <h3>FTC ROBOTICS TEAM</h3>
        <h1 id="fade">IDeaL Electronics</h1>
        <h2>RO032</h2>
      </div>
      <div className="image" id="teamPhoto">
        <img src="\images\download.jpeg" alt="team photo" />
      </div>
    </div>
  );
}

export default HeroSection;
