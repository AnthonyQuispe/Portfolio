import "./Hero.scss";
import Software from "../../Assets/Icons/Softwaretext.svg";

const Hero = () => {
  return (
    <div className="hero">
      <h3 className="hero__title">Innovative</h3>
      <h1 className="hero__heading">
        Full Stack <br />
        Developer
      </h1>
      <p className="hero__description--right">I AM A PASSIONATE DEVELOPER,</p>
      <p className="hero__description">
        I LEVERAGE MY SKILLS AND EXPERIENCE IN TECHNOLOGY TO CRAFT INNOVATIVE
        AND EFFICIENT SOLUTIONS FOR REAL-WORLD PROBLEMS, ULTIMATELY AIMING TO
        HELP PEOPLE EFFECTIVELY.
      </p>
      <div className="hero__button--container">
        <button className="hero__button--resume">RESUME</button>
        <button className="hero__button">
          <img
            className="hero__software"
            src={Software}
            alt="software text icon"
          />
          <p className="hero__button--text">Contact Me</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
