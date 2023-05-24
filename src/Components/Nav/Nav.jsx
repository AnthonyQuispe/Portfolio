import "./Nav.scss";
import Night from "../../Assets/Icons/dark-mode.png";
import Mushroom from "../../Assets/Icons/mushroom.png";
import Color from "../../Assets/Icons/mana.png";
import Eraser from "../../Assets/Icons/eraser.png";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="nav__left-nameContainer">
          <h3 className="nav__left-name">Anthony Quispe</h3>
        </div>
        <div className="nav__left-pagesContainer">
          <p className="nav__left-page">Feed</p>
          <p className="nav__left-page">About</p>
          <p className="nav__left-page">Connect</p>
        </div>
      </div>
      <div className="nav__right">
        <div className="nav__right-modeContainer">
          <img className="nav__night" src={Night} alt="Night icon" />
          <p className="nav__right-mode">Mode</p>
        </div>
        <div className="nav__right-colorContainer">
          <img className="nav__editor" src={Mushroom} alt="mushroom icon" />
          <img className="nav__editor" src={Color} alt="mushroom icon" />
          <img className="nav__editor" src={Eraser} alt="mushroom icon" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
