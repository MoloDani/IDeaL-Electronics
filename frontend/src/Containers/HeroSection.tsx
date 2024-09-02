import { useEffect, useState } from "react";
import "./hero.css";

function HeroSection() {
  const startText = "RO032 ";
  const endText = "#19085";
  const [currentText, setCurrentText] = useState(startText);
  const [animating, setAnimating] = useState(true);
  const [forward, setForward] = useState(true);
  const letterDuration = 1500; //ms
  const animationPause = 1000; //ms
  const letterDelay = 200; //ms
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;
    let finishIndex = -1;
    const targetText = forward ? endText : startText;
    const totalLetters = targetText.length;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const elapsedTime = time - startTime;

      if (elapsedTime < letterDuration + totalLetters * letterDelay) {
        let newText = currentText
          .split("")
          .map((char, i) => {
            const charElapsedTime = elapsedTime - i * letterDelay;
            if (charElapsedTime >= 0) {
              if (targetText === startText && i === 5) return "";
              if (charElapsedTime < letterDuration && i > finishIndex) {
                return characters[
                  Math.floor(Math.random() * characters.length)
                ];
              }
              if (i === finishIndex + 1) {
                finishIndex += 1;
              }
            }
            return i <= finishIndex ? targetText[i] : char;
          })
          .join("");

        setCurrentText(newText);

        animationFrame = requestAnimationFrame(animate);
        // console.log(animationFrame);
        // console.log(time);
      } else {
        // console.log("Working");

        setTimeout(() => {
          setCurrentText(forward ? endText : startText);
          cancelAnimationFrame(animationFrame);
          setForward(!forward);
        }, animationPause);
      }
    };

    animationFrame = requestAnimationFrame(animate);
  }, [forward]);

  return (
    <div className="container" id="hero">
      <div className="startText" id="numeEchipa">
        <h3>FTC ROBOTICS TEAM</h3>
        <h1 id="textFade">IDeaL Electronics</h1>
        <h2 id="teamNumber">{currentText}</h2>
      </div>
      <div className="imagine" id="teamPhoto">
        <img src="\images\team2.jpg" alt="team photo" />
      </div>
    </div>
  );
}

export default HeroSection;
