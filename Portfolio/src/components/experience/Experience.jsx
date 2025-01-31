import "./experience.css";
// import myImage from "../../assets/about.jpg";
import { experience } from "./e-data.js";
import wipro from "../../assets/wipro_new_logo.svg";

export default function Experience() {
  return (
    <>
      <section id="experience">
        <h1 className="all-title scroll">Experience</h1>

        <div className="e-container">
          <div className="exp-container container scroll">
            <div className="e-title">
              <div className="exp-company">{experience.company}</div>
              <span>
                <img src={wipro} alt="wipro" />
              </span>
            </div>
            <div className="exp-job">{experience.title}</div>
            <div className="exp-from">{experience.from}</div>
            <div className="exp-jd">
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
