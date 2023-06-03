import "./DarkFooter.scss";
import "./LightFooter.scss";
import { useState, useEffect } from "react";
import DarkGithub from "../../Assets/Icons/light_github.png";
import LightGithub from "../../Assets/Icons/github.png";
import DarkTwitter from "../../Assets/Icons/light_twitter.png";
import LightTwitter from "../../Assets/Icons/dark_twitter.png";
import DarkLinkedin from "../../Assets/Icons/light_linkedin.png";
import LightLinkedin from "../../Assets/Icons/dark_linkedin.png";
import { Link } from "react-router-dom";

const Footer = ({ backgroundMode }) => {
  const [footerClassName, setFooterClassName] = useState("dark-footer");

  useEffect(() => {
    setFooterClassName(backgroundMode ? "dark-footer" : "light-footer");
  }, [backgroundMode]);

  return (
    <footer className={`${footerClassName}`}>
      <h3 className={`${footerClassName}__title`}>Find Me On</h3>
      <Link to={"https://github.com/AnthonyQuispe"}>
        <img
          className={`${footerClassName}__imgs`}
          src={footerClassName === "dark-nav" ? DarkGithub : LightGithub}
          alt="github"
        />{" "}
      </Link>
      <Link to={"https://twitter.com/AnthonysQuispe"}>
        <img
          className={`${footerClassName}__imgs`}
          src={footerClassName === "dark-nav" ? DarkTwitter : LightTwitter}
          alt="Twitter"
        />
      </Link>
      <Link to={"https://www.linkedin.com/in/anthonyqs/"}>
        <img
          className={`${footerClassName}__imgs`}
          src={footerClassName === "dark-nav" ? DarkLinkedin : LightLinkedin}
          alt="Linkedin"
        />
      </Link>
    </footer>
  );
};

export default Footer;
