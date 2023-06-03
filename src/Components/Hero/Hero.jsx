import "./DarkHero.scss";
import "./LightHero.scss";
import DarkSoftware from "../../Assets/Icons/Softwaretext.svg";
import LightSoftware from "../../Assets/Icons/LightSoftwaretext.svg";
import ResumePDF from "../../Assets/Images/Anthony_Quispe - Resume.pdf";
import { useState, useEffect } from "react";

const Hero = ({ backgroundMode }) => {
  const [heroClassName, setHeroClassName] = useState("dark-hero");

  const handleResumeClick = () => {
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Anthony Quispe resume.pdf";
    link.click();
  };

  const handleContactClick = () => {
    window.location.href = "mailto:anthony.s.quispe@gmail.com";
  };

  useEffect(() => {
    setHeroClassName(backgroundMode ? "dark-hero" : "light-hero");
  }, [backgroundMode]);

  return (
    <div className={`${heroClassName}`}>
      <h3 className={`${heroClassName}__title`}>Innovative</h3>
      <h1 className={`${heroClassName}__heading`}>
        Full Stack <br />
        Developer
      </h1>
      <p className={`${heroClassName}__description--right`}>
        I AM A PASSIONATE DEVELOPER,
      </p>
      <p className={`${heroClassName}__description`}>
        I LEVERAGE MY SKILLS AND EXPERIENCE IN TECHNOLOGY TO CRAFT INNOVATIVE
        AND EFFICIENT SOLUTIONS FOR REAL-WORLD PROBLEMS, ULTIMATELY AIMING TO
        HELP PEOPLE EFFECTIVELY.
      </p>
      <div className={`${heroClassName}__button--container`}>
        <button
          className={`${heroClassName}__button--resume`}
          onClick={handleResumeClick}
        >
          RESUME
        </button>
        <button
          className={`${heroClassName}__button`}
          onClick={handleContactClick}
        >
          <img
            className={`${heroClassName}__software`}
            src={heroClassName === "dark-hero" ? DarkSoftware : LightSoftware}
            alt="software text icon"
          />
          <p className={`${heroClassName}__button--text`}>Contact Me</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
