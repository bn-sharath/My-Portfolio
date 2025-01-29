
import { education, experience } from "./q-data.js";
import "./qualification.css";

export default function Qualification() {
  return (
    <>
    <section id="qualification">

      <h1 className="all-title">Qualification</h1>

      <div className="q-container">
        <div className="edu-container container">
          <div className="q-title">
            <box-icon type="solid" name="graduation"  size='md'></box-icon>
            <span>Education</span>
          </div>
          <div className="edu-degree">{education.degree}</div>
          <div className="edu-year">{education.year}</div>
          <div className="edu-clg">{education.college}</div>
          <div className="edu-score">{education.score}</div>
        </div>

        <div className="exp-container container">
          <div className="q-title">
            <box-icon type="solid" name="briefcase"  size='md'></box-icon>
            <span> Experience</span>
          </div>
          <div className="exp-job">{experience.title}</div>
          <div className="exp-from">{experience.from}</div>
          <div className="exp-company">{experience.company}</div>
          <div className="exp-jd">{experience.jd}</div>
        </div>
      </div>
    </section>

    </>
  );
}
