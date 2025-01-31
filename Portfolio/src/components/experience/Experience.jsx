import "./experience.css";
import { experience } from "./e-data.js";
import wipro from "../../assets/wipro_new_logo.svg";

export default function Experience() {
  return (
    <>
      <section id="experience">
        <h1 className="all-title">Experience</h1>

        <div className="e-container">
          <div className="exp-container container">
            <div className="e-title scroll">
              <div className="exp-company scroll">{experience.company}</div>
              <span>
                <img src={wipro} alt="wipro" />
              </span>
            </div>
            <div className="exp-job scroll">{experience.title}</div>
            <div className="exp-from scroll">{experience.from}</div>
            <div className="exp-jd scroll">
              {experience.jd.map((list,index) => {
                return (
                  
                  <li key={index}>
                    {list}
                  </li>
                  
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
