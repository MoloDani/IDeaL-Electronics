import { useState } from "react";
import Blob from "./Blob";

function AboutUs() {
  return (
    <div className="container" id="about">
      <Blob topOffset={100} leftOffset={100} />
      <div className="startText">
        <h3>CU CE NE OCUPAM</h3>
        <h2>Despre noi</h2>
        <p className="longText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          sequi obcaecati nobis, minus eum accusantium velit nam laudantium,
          aliquid quia deleniti facere numquam fugiat magnam commodi sunt
          reprehenderit quaerat sed.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
