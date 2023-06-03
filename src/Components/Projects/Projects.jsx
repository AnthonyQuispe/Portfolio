import "./DarkProject.scss";
import "./LightProject.scss";
import { useState, useEffect } from "react";
import projectList from "./ProjectsList.json";

const Connect = ({ backgroundMode }) => {
  const [projectClassName, setProjectClassName] = useState("dark-project");
  const [projectData, setProjectsData] = useState([]);

  useEffect(() => {
    setProjectClassName(backgroundMode ? "dark-project" : "light-project");
  }, [backgroundMode]);

  useEffect(() => {
    // Simulated asynchronous fetch operation
    // Replace this with your actual fetch logic
    setTimeout(() => {
      setProjectsData(projectList.projects);
    }, 0);
  }, []);

  return (
    <div id="projects" className={`${projectClassName}`}>
      <div className={`${projectClassName}__img-container`}></div>
      <h1 className={`${projectClassName}__heading`}>Projects</h1>
      {projectData.map((projects, index) => (
        <div key={index}>
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
        </div>
      ))}
    </div>
  );
};

export default Connect;
