import "./DarkAbout.scss";
import "./LightAbout.scss";
import { useState, useEffect } from "react";
import AnthonyCartoon from "../../Assets/Images/Anthony.png";
import Anthony from "../../Assets/Images/Me.png";
import jobsData from "./Jobs.json";

const Connect = ({ backgroundMode }) => {
  const [aboutClassName, setAboutClassName] = useState("dark-about");
  const [jobData, setJobData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isCartoon, setIsCartoon] = useState(false); // Track the image version
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setAboutClassName(backgroundMode ? "dark-about" : "light-about");
  }, [backgroundMode]);

  useEffect(() => {
    setTimeout(() => {
      setJobData(jobsData.jobs);
    }, 0);
  }, []);

  useEffect(() => {
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const handleImageClick = () => {
    if (isMobile) {
      setIsCartoon((prevIsCartoon) => !prevIsCartoon);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0 && !scrolling) {
        setScrolling(true);
      } else if (scrollTop === 0 && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div id="about" className={`${aboutClassName}`}>
      <div
        className={`${aboutClassName}__heading--container ${
          scrolling ? "scroll-heading" : ""
        }`}
      >
        <div className={`${aboutClassName}__left--container`}>
          <div className={`${aboutClassName}__img-container`}>
            <img
              src={isCartoon ? AnthonyCartoon : Anthony}
              alt="Me"
              className={`${aboutClassName}__img`}
              onClick={handleImageClick}
              onMouseOver={(e) => {
                if (!isMobile) {
                  e.target.src = AnthonyCartoon;
                }
              }}
              onMouseOut={(e) => {
                if (!isMobile) {
                  e.target.src = Anthony;
                }
              }}
            />
          </div>
          <h1 className={`${aboutClassName}__heading`}>About Me</h1>
        </div>
      </div>
      <div className={`${aboutClassName}__job-containers`}>
        {jobData.map((job, index) => (
          <div className={`${aboutClassName}__job-container`} key={index}>
            <h4 className={`${aboutClassName}__job-date`}>{job.jobDate}</h4>
            <h3 className={`${aboutClassName}__job-title`}>{job.jobTitle} </h3>
            <h3 className={`${aboutClassName}__job-company`}>
              @{job.jobCompany}
            </h3>
            <p className={`${aboutClassName}__job-summary`}>{job.jobSummary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
