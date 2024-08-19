import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeroSection from "./Containers/HeroSection";
import AboutUs from "./Containers/AboutUs";
import Sezoane from "./Containers/Sezoane";
import Membri from "./Containers/Membri";

function App() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Sezoane />
      <Membri />
    </div>
  );
}

export default App;
