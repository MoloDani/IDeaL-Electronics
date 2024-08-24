import { useEffect, useState } from "react";
import "./hero.css";

function HeroSection() {
  const startText = "RO032 ";
  const endText = "#19085";
  const [currentText, setCurrentText] = useState(startText);
  const [animating, setAnimating] = useState(true);
  const [forward, setForward] = useState(true);
  const duration = 2500; //ms
  const shuffleTime = 1200; //ms
  const timeShow = 1000; //ms
  const letterDelay = 300; //ms
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;
    let stopIndex = -1;
    const targetText = forward ? endText : startText;
    const totalStops = targetText.length;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsedTime = time - startTime;

      if (elapsedTime < duration + totalStops * letterDelay) {
        let newText = currentText
          .split("")
          .map((char, i) => {
            const charElapsedTime = elapsedTime - i * letterDelay;
            if (charElapsedTime >= 0) {
              if (targetText === startText && i === 5) return "";
              if (charElapsedTime - shuffleTime < duration && i > stopIndex) {
                return characters[
                  Math.floor(Math.random() * characters.length)
                ];
              }
              if (
                charElapsedTime - shuffleTime >= duration &&
                i === stopIndex + 1
              ) {
                stopIndex += 1;
              }
            }
            return i <= stopIndex ? targetText[i] : char;
          })
          .join("");

        setCurrentText(newText);

        if (
          elapsedTime >=
          shuffleTime +
            (stopIndex + 1) * ((duration - shuffleTime) / totalStops)
        ) {
          stopIndex += 1;
        }

        animationFrame = requestAnimationFrame(animate);
      } else {
        setCurrentText(targetText);

        setTimeout(() => {
          setAnimating(!animating);
        }, timeShow);
      }
    };

    if (animating) {
      animationFrame = requestAnimationFrame(animate);
    }

    //clean up
    return () => cancelAnimationFrame(animationFrame);
  }, [animating]);

  useEffect(() => {
    if (!animating) {
      setCurrentText(forward ? endText : startText);
      setForward(!forward);
      setAnimating(true);
    }
  }, [animating, forward, endText, startText]);

  return (
    <div className="container" id="hero">
      <div className="startText" id="numeEchipa">
        <h3>FTC ROBOTICS TEAM</h3>
        <h1 id="textFade">IDeaL Electronics</h1>
        <h2 id="teamNumber">{currentText}</h2>
      </div>
      <div className="imagine" id="teamPhoto">
        <img src="\images\download.jpg" alt="team photo" />
      </div>
    </div>
  );
}

export default HeroSection;
