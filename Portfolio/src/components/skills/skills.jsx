import { skills } from "./skills-data";

export default function Skills() {
  return (
    <>
      <h1 className="all-title">Skills</h1>
      <div className="skill-container">
        <div className="skill-card">
          {skills.frontend.map((skill) => {
            return (
              <div className="skill-element">
                <box-icon type="solid" name="check-circle"></box-icon>
                {skill}
              </div>
            );
          })}
        </div>
        <div className="skill-card">
          {skills.backend.map((skill) => {
            return (
              <div className="skill-element">
                <box-icon type="solid" name="check-circle"></box-icon>
                {skill}
              </div>
            );
          })}
        </div>
      </div>
        <div className="skill-card">
          {skills.others.map((skill) => {
            return (
              <div className="skill-element">
                <box-icon type="solid" name="check-circle"></box-icon>
                {skill}
              </div>
            );
          })}
        </div>
    </>
  );
}
