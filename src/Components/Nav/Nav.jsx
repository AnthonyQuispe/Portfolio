import "./DarkNav.scss";
import "./LightNav.scss";
import Night from "../../Assets/Icons/dark_mode.png";
import Day from "../../Assets/Icons/light_mode.png";
import LightLinkedin from "../../Assets/Icons/light_linkedin.png";
import DarkLinkedin from "../../Assets/Icons/dark_linkedin.png";
import Twitter from "../../Assets/Icons/dark_twitter.png";
import LightTwitter from "../../Assets/Icons/light_twitter.png";
import Github from "../../Assets/Icons/github.png";
import LightGithub from "../../Assets/Icons/light_github.png";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = ({ backgroundModeClick }) => {
  const [isNightMode, setNightMode] = useState(false);
  const [navClassName, setNavClassName] = useState("dark-nav");
  const [nightModeImage, setNightModeImage] = useState(Night);

  const handleNightModeClick = () => {
    setNightMode(!isNightMode);
    setNavClassName(isNightMode ? "dark-nav" : "light-nav");
    setNightModeImage(isNightMode ? Night : Day);
    backgroundModeClick(); // Call the prop function passed from Home component
  };

  const handleScrollTo = (elementId) => {
    scroll.scrollTo(elementId, {
      duration: 500,
      smooth: true,
      offset: -50, // Optional offset for better scroll position
    });
  };

  return (
    <nav className={`${navClassName}`}>
      <div className={`${navClassName}__left`}>
        <div className={`${navClassName}__left-nameContainer`}>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={`${navClassName}__left-page`}
            onClick={() => handleScrollTo("hero")}
          >
            <h3 className={`${navClassName}__left-name`}>Anthony Quispe</h3>
          </Link>
        </div>
        <div className={`${navClassName}__left-pagesContainer`}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={`${navClassName}__left-page`}
            onClick={() => handleScrollTo("projects")}
          >
            Projects
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={`${navClassName}__left-page`}
            onClick={() => handleScrollTo("about")}
          >
            About
          </Link>

          <Link
            to="connect"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={`${navClassName}__left-page`}
            onClick={() => handleScrollTo("connect")}
          >
            Connect
          </Link>
        </div>
      </div>

      <div className={`${navClassName}__right`}>
        <div className={`${navClassName}__right-modeContainer`}>
          <img
            className={`${navClassName}__dark`}
            src={nightModeImage}
            alt="Night/Day icon"
            onClick={handleNightModeClick}
          />
          <p className={`${navClassName}__right-mode`}>Mode</p>
        </div>
        <div className={`${navClassName}__right-colorContainer`}>
          <a href="https://www.linkedin.com/in/anthonyqs/">
            <img
              className={`${navClassName}__editor`}
              src={navClassName === "dark-nav" ? DarkLinkedin : LightLinkedin}
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/AnthonyQuispe">
            <img
              className={`${navClassName}__editor`}
              src={navClassName === "dark-nav" ? Github : LightGithub}
              alt="Github icon"
            />
          </a>

          <a href="https://twitter.com/AnthonysQuispe">
            <img
              className={`${navClassName}__editor`}
              src={navClassName === "dark-nav" ? Twitter : LightTwitter}
              alt="Twitter icon"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
