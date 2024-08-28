import React, { useEffect, useState } from "react";
import { sez } from "./Sezoane";
import "./sezon.css";
import firstPlaceIcon from "../../images/ImagesBase64/firstPlace";
import secondPlaceIcon from "../../images/ImagesBase64/secondPlace";
import thirdPlaceIcon from "../../images/ImagesBase64/thirdPlace";


// Asta e un card pentru un singur sezon

function Sezon({ name, img, awardType1, rewardPlace1, competitionStage1, 
  awardType2, rewardPlace2, competitionStage2 }: sez) {
  return (
    <div className="sezCard">
      <div className="logoSez">
      <img src={"data:image/jpeg;base64, " + img} alt={"logo sezon: " + name} />
      <h3>{name}</h3>
      </div>
      <div className= "award">
        <img src={"data:image/jpeg;base64, " + firstPlaceIcon} alt="award image"></img>
        <h3>{awardType1}</h3>
        <h3>{competitionStage1}</h3>
      </div>

      <div className= "award">
        <img src={"data:image/jpeg;base64, " + secondPlaceIcon} alt="award image"></img>
        <h3>{awardType2}</h3>
        <h3>{competitionStage2}</h3>
      </div>
    </div>
  );
}

export default Sezon;
