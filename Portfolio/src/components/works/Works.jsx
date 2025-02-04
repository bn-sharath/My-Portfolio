import { projects } from "./works-data.js";
import "./works.css";

export default function Works() {
  return (
    <>
      <section id="works">
        <div className="all-title">My Works</div>
        <div className="project-container">
          {projects.map((project) => {
            return (
              <div className="container ">
                <div className="project-title scroll">{project.title}</div>
                <div className="project-sub-title scroll">
                  {project.sub_title}
                </div>
                <div className="project-details scroll">
                  <div className="img-box scroll">
                    <img src={project.img} alt=""  />
                  </div>

                  <div className="project-box">
                    <div className="project-description scroll">
                      {project.description}
                    </div>
                    <div className="project-usertech scroll">
                      {project.usedTech.map((tech) => {
                        return <span>{tech}</span>;
                      })}
                    </div>
                    <div className="project-githup scroll">
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
