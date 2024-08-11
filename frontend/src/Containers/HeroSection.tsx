import { useState } from "react";
import "./hero.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <div>
        <h3>FTC ROBOTICS TEAM</h3>
        <h1>IDeaL Electronics</h1>
        <h2>RO032</h2>
      </div>

      <div>
        <img src="\images\download.jpg" alt="team photo" />
      </div>
    </div>
  );
}

export default HeroSection;
