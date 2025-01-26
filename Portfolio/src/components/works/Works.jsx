import { projects } from "./works-data.js";
import "./works.css";
export default function Works() {
  return (
    <>
      <div className="all-title">My Projects</div>
      <div className="project-container">
        {projects.map((project) => {
          return (
            <div className="container">
              <div className="project-title">
                {project.title}

                <div className="project-sub-title">{project.sub_title}</div>
              </div>
              <div className="project-description">{project.description}</div>
              <div className="project-usertech">
                <span>User Technologies :-</span> {project.usedTech}
              </div>
              <div className="project-githup">
                <span>
                  <box-icon type="logo" name="github"></box-icon>
                  GitHup:-
                </span>
                <a href={project.gitHup} alt="#">Source Code</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
