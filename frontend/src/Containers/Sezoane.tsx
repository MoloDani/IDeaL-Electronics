import React, { useState, useEffect, useRef, RefObject } from "react";
import Sezon from "./Sezon";
import Blob from "./Blob";
import "./sezoane.css";

export interface sez {
  name: string;
  img: string;
  awardType1: string;
  rewardPlace1: number;
  competitionStage1: string;
  awardType2: string;
  rewardPlace2: number;
  competitionStage2: string;
  ind?: RefObject<HTMLDivElement> | null;
}

function Sezoane() {
  const [backendData, setBackendData] = useState<sez[]>([]);
  const [seasonsShown, setSeasonsShown] = useState(3);
  const [isChanged, setIsChanged] = useState(false);
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/seasons")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".sezon-card");

      elements.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the element is in the viewport
        const startFade = 0.8 * windowHeight; // Start fading in at 80% of the window height
        const endFade = 0.7 * windowHeight; // Finish fading in at 20% of the window height

        // If the element is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          let scrollRatio = (rect.top - endFade) / (startFade - endFade);

          // Clamp the value between 0 and 1
          scrollRatio = Math.min(Math.max(scrollRatio, 0), 1);

          // Apply transform and opacity based on scroll position
          (el as HTMLElement).style.transform = `translateY(${
            15 * scrollRatio
          }px)`;
          (el as HTMLElement).style.opacity = `${1 - scrollRatio}`;
        }
      });
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial trigger of the scroll event to position elements correctly
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [backendData, seasonsShown]);

  const changeSeasonsShown = () => {
    setSeasonsShown(seasonsShown === 3 ? backendData.length : 3);
    setIsChanged(!isChanged);

    if (isChanged && scrollTargetRef.current) {
      const viewportHeight = window.innerHeight;
      const offset = 0.8 * viewportHeight;
      const pos = scrollTargetRef.current.offsetTop + offset;
      window.scrollTo({
        top: pos,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container" id="sezoane">
      <div className="startText">
        <h3>SEZOANE</h3>
        <h2>Cu ce ne mândrim noi!</h2>
      </div>
      <Blob topOffset={700} leftOffset={-1} rightOffset={-80} />
      <div ref={scrollTargetRef} id="containerSez">
        {backendData.slice(0, seasonsShown).map((season: sez, i) => (
          <Sezon
            key={i}
            name={season.name}
            img={season.img}
            awardType1={season.awardType1}
            rewardPlace1={season.rewardPlace1}
            competitionStage1={season.competitionStage1}
            awardType2={season.awardType2}
            rewardPlace2={season.rewardPlace2}
            competitionStage2={season.competitionStage2}
            ind={i === 2 ? scrollTargetRef : null}
          />
        ))}
      </div>

      <button
        type="button"
        className="dropdownButton"
        onClick={changeSeasonsShown}
      >
        <img
          src="./images/right-arrow.png"
          alt="toggle button for dropdown"
          className={`dropdownButton ${
            isChanged ? "rotate-up" : "rotate-down"
          }`}
        />
      </button>
    </div>
  );
}

export default Sezoane;
