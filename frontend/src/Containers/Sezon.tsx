import React, { useEffect, useState } from "react";
import { sez } from "./Sezoane";
import "./sezon.css";

// Asta e un card pentru un singru sezon

function Sezon({ name, img, awardType1, rewardPlace1, competitionStage1, 
  awardType2, rewardPlace2, competitionStage2 }: sez) {
  return (
    <div className="sezCard">
      <div className="logoSez">
      <img src={"data:image/jpeg;base64, " + img} alt={"logo sezon: " + name} />
      <h1>name</h1>
      </div>
      
    </div>
  );
}

export default Sezon;
