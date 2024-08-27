import React from "react";
import { useState, useEffect } from "react";
import Sezon from "./Sezon";
import "./sezoane.css";

// Aici vom scrie cod pentru tot display-ul de sezoane

export interface sez {
  name: string;
  img: string;

  awardType1: string;
  rewardPlace1: number;
  competitionStage1: string;
  
  awardType2: string;
  rewardPlace2: number;
  competitionStage2: string;
}

function Sezoane() {
  const [backendData, setBackendData] = useState<sez[]>([]);
  const [seasonsShown, setSeasonsShown] = useState(3);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() =>{
    fetch("http://localhost:5000/seasons")
    .then((response) => response.json())
    .then((data) => {
      setBackendData(data)
    });
  }, [])

  const changeSeasonsShown = () =>{
    if(seasonsShown === 3)
      setSeasonsShown(backendData.length);
    else
      setSeasonsShown(3);
    setIsChanged(!isChanged);
  }

  return (
    <div className="container" id="sezoane">
      <div className="startText">
        <h3>SEZOANE</h3>
        <h2>Cu ce ne mandrim noi!</h2>
      </div>

      <div id="containerSez">
        {backendData.slice(0, seasonsShown).map((season: sez, i) => (
          <Sezon
            key={i}
            name={season.name}
            img={season.img}
            awardType1= {season.awardType1}
            rewardPlace1 = {season.rewardPlace1}
            competitionStage1 = {season.competitionStage1} 
            awardType2 = {season.awardType2}
            rewardPlace2 = {season.rewardPlace2}
            competitionStage2 = {season.competitionStage2}
          />
        ))}
      </div>

      <button type="button" className="dropdownButton"
      onClick= {changeSeasonsShown}>
        <img 
        src = ".\images\right-arrow.png"
        alt = "toggle button for dropdown"
        className =  {`dropdownButton ${isChanged ? "rotate-up" : "rotate-down"}`}>
        </img>
        
      </button>
    </div>
  );
}

export default Sezoane;
