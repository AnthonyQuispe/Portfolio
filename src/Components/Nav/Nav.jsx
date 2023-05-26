import "./DarkNav.scss";
import "./LightNav.scss";
import Night from "../../Assets/Icons/dark_mode.png";
import Day from "../../Assets/Icons/light_mode.png";
import DarkMushroom from "../../Assets/Icons/dark_mushroom.png";
import LightMushroom from "../../Assets/Icons/light_mushroom.png";
import Color from "../../Assets/Icons/mana.png";
import DarkColor from "../../Assets/Icons/dark_mana.png";
import LightColor from "../../Assets/Icons/light_mana.png";
import Eraser from "../../Assets/Icons/eraser.png";
import DarkEraser from "../../Assets/Icons/dark_eraser.png";
import LightEraser from "../../Assets/Icons/light_eraser.png";
import { useState } from "react";

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

  return (
    <nav className={`${navClassName}`}>
      <div className={`${navClassName}__left`}>
        <div className={`${navClassName}__left-nameContainer`}>
          <h3 className={`${navClassName}__left-name`}>Anthony Quispe</h3>
        </div>
        <div className={`${navClassName}__left-pagesContainer`}>
          <p className={`${navClassName}__left-page`}>Feed</p>
          <p className={`${navClassName}__left-page`}>About</p>
          <p className={`${navClassName}__left-page`}>Connect</p>
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
          <img
            className={`${navClassName}__editor`}
            src={navClassName === "dark-nav" ? DarkMushroom : LightMushroom}
            alt="mushroom icon"
          />
          <img
            className={`${navClassName}__editor`}
            src={navClassName === "dark-nav" ? DarkColor : LightColor}
            alt="mushroom icon"
          />
          <img
            className={`${navClassName}__editor`}
            src={navClassName === "dark-nav" ? DarkEraser : LightEraser}
            alt="mushroom icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
