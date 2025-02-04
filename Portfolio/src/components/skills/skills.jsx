import { skills } from "./skills-data.js";
import "./skills.css";

export default function Skills() {
  const [fname, ficon] = skills.frontend;
  return (
    <>
      <section id="skills">
        <h1 className="all-title">Skills</h1>
        <div className="skill-container">
          <div className="card-container">
            <div className="container">
              <div className="card-title scroll">Frontend</div>
              <div className="card">
                {skills.frontend.map((element) => {
                  return (
                    <div className="scroll">
                      <div className="element">
                        <div className="icon">
                          <img src={element.icon} alt={element.name} />
                        </div>
                        <div className="name">{element.name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="container">
              <div className="card-title scroll">Backend</div>
              <div className="card">
                {skills.backend.map((element) => {
                  return (
                    <div className="scroll">
                      <div className="element">
                        <div className="icon">
                          <img src={element.icon} alt={element.name} />
                        </div>
                        <div className="name">{element.name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="container">
              <div className="card-title scroll">Tools</div>
              <div className="card">
                {skills.tools.map((element) => {
                  return (
                    <div className="scroll">
                      <div className="element">
                        <div className="icon">
                          <img src={element.icon} alt={element.name} />
                        </div>
                        <div className="name">{element.name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
