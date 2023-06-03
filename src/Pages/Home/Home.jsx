import "./Home.scss";
import Nav from "../../Components/Nav/Nav";
import BackgroundNight from "../../Components/Background/BackgroundNight";
import BackgroundDay from "../../Components/Background/BackgroundDay";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import Connect from "../../Components/Connect/Connect";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects/Projects";

const Home = () => {
  const [backgroundMode, setBackgroundMode] = useState(true);
  const backgroundModeClick = () => {
    setBackgroundMode(!backgroundMode);
  };

  return (
    <div>
      {backgroundMode ? <BackgroundNight /> : <BackgroundDay />}
      <div className="home">
        <Nav backgroundModeClick={backgroundModeClick} />
        <Hero backgroundMode={backgroundMode} />
        <About backgroundMode={backgroundMode} />
        <Projects backgroundMode={backgroundMode} />
        <Connect backgroundMode={backgroundMode} />
      </div>
    </div>
  );
};

export default Home;
