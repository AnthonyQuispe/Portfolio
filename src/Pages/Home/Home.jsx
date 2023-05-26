import "./Home.scss";
import Nav from "../../Components/Nav/Nav";
import BackgroundNight from "../../Components/Background/BackgroundNight";
import BackgroundDay from "../../Components/Background/BackgroundDay";
import Hero from "../../Components/Hero/Hero";
import { useState } from "react";

const Home = () => {
  const [backgroundMode, setBackgroundMode] = useState(true);
  const backgroundModeClick = () => {
    setBackgroundMode(!backgroundMode);
  };

  return (
    <div>
      {backgroundMode ? <BackgroundNight /> : <BackgroundDay />}
      <Nav backgroundModeClick={backgroundModeClick} />
      <Hero />
    </div>
  );
};

export default Home;
