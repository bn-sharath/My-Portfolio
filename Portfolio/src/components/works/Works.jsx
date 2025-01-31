import { projects } from "./works-data.js";
import "./works.css";

export default function Works() {
  return (
    <>
      <section id="works" >
        <div className="all-title scroll">My Works</div>
        <div className="project-container">
          {projects.map((project) => {
            return (
              <div className= "container scroll">
                <div className="project-title">{project.title}</div>
                <div className="project-sub-title">{project.sub_title}</div>
                <div className="project-details">
                  <div className="img-box">
                    <img src={project.img} alt="" />
                  </div>

                  <div className="project-box">
                    <div className="project-description">
                      {project.description}
                    </div>
                    <div className="project-usertech">
                      {project.usedTech.map((tech) => {
                        return <span>{tech}</span>;
                      })}
                    </div>
                    <div className="project-githup">
                      <span>
                        <box-icon type="logo" name="github"></box-icon>
                        GitHup:-
                      </span>
                      <a href={project.gitHup} alt="#">
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
