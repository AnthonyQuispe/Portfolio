import "./DarkProject.scss";
import "./LightProject.scss";
import { useState, useEffect } from "react";
import projectList from "./ProjectsList.json";

const Connect = ({ backgroundMode }) => {
  const [projectClassName, setProjectClassName] = useState("dark-project");
  const [projectData, setProjectsData] = useState([]);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setProjectClassName(backgroundMode ? "dark-project" : "light-project");
  }, [backgroundMode]);

  useEffect(() => {
    setTimeout(() => {
      setProjectsData(projectList.projects);
    }, 0);
  }, []);

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
    <div id="projects" className={`${projectClassName}`}>
      <div
        className={`${projectClassName}__heading--container ${
          scrolling ? "scroll-heading" : ""
        }`}
      >
        <h1 className={`${projectClassName}__heading`}>Projects</h1>
      </div>
      <div className={`${projectClassName}__container`}>
        {projectData.map((projects, index) => (
          <div className={`${projectClassName}__containers`} key={index}>
            <h4 className={`${projectClassName}__project-date`}>
              {projects.projectDate}
            </h4>
            <a
              href={projects.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className={`${projectClassName}__project-title`}>
                {projects.projectTitle}{" "}
                <button
                  className={`${projectClassName}__project-title--button`}
                >
                  Preview
                </button>
              </h3>{" "}
            </a>
            <h3 className={`${projectClassName}__project-role`}>
              {projects.projectRole}
            </h3>
            <p className={`${projectClassName}__project-summary`}>
              {projects.projectSummary}
            </p>
            <div className={`${projectClassName}__project-stack-container`}>
              {projects.techStack.map((tech, index) => (
                <button
                  className={`${projectClassName}__project-stack`}
                  key={index}
                >
                  {tech}
                </button>
              ))}
            </div>
            <a
              href={projects.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${projectClassName}__img-project--container`}>
                {" "}
                <img
                  src={projects.projectPictures}
                  alt={projects.projectTitle}
                  className={`${projectClassName}__img-project`}
                ></img>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
