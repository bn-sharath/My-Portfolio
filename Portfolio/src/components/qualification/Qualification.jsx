import { education } from "./q-data.js";
import wipro from "../../assets/image-1.webp";

import "./qualification.css";

export default function Qualification() {
  return (
    <>
      <section id="qualification">
        <h1 className="all-title">Qualification</h1>

        <div className="q-container">
          <div className="edu-container container">
            <div className="q-title scroll">
              <div className="edu-college">{education.college}</div>
              <span>
                <img src={wipro} alt="wipro" />
              </span>
            </div>
            <div className="edu-degree scroll">{education.degree} </div>
            <div className="edu-year scroll">{education.year}</div>
          </div>
        </div>
      </section>
    </>
  );
}
