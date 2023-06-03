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

  useEffect(() => {
    setAboutClassName(backgroundMode ? "dark-about" : "light-about");
  }, [backgroundMode]);

  useEffect(() => {
    // Simulated asynchronous fetch operation
    // Replace this with your actual fetch logic
    setTimeout(() => {
      setJobData(jobsData.jobs);
    }, 0);
  }, []);

  useEffect(() => {
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  const handleImageClick = (e) => {
    if (isMobile) {
      e.target.src = AnthonyCartoon;
    }
  };

  return (
    <div id="about" className={`${aboutClassName}`}>
      <div className={`${aboutClassName}__img-container`}>
        <img
          src={Anthony}
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
      {jobData.map((job, index) => (
        <div key={index}>
          <h3 className={`${aboutClassName}__job-title`}>{job.jobTitle} </h3>
          <h3 className={`${aboutClassName}__job-company`}>
            @{job.jobCompany}
          </h3>
          <h4 className={`${aboutClassName}__job-date`}>{job.jobDate}</h4>
          <p className={`${aboutClassName}__job-summary`}>{job.jobSummary}</p>
        </div>
      ))}
    </div>
  );
};

export default Connect;
