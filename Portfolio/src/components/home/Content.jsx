import "./content.css";
import resume from "../../assets/Sharath.pdf";
import info from "./info";

export default function Content() {
  return (
    <>
      <div className="content-container">
        <div className="description">
          <p>
            over 2 years of extensive experience in designing, coding, and
            implementing scalable applications using
            <span className="bold"> React JS </span>
            and
            <span className="bold"> Node JS. </span>
            Proficient in various programming languages and frameworks,
            including
            <span className="bold"> React, Node, Python, JavaScript </span>
            and
            <span className="bold"> Java. </span>
          </p>
          <p>
            What sets me apart is my commitment to continuous learning and
            growth. I'm always exploring new techniques and staying updated with
            industry trends to deliver the best results.
          </p>
          <p>
            Feel free to browse through my portfolio and reach out if you'd like
            to collaborate or discuss any exciting opportunities. Let's create
            something amazing together!
          </p>
        </div>
        <div className="download-container">
          <a href={resume} download="">
            <button className="button download-btm">
              <span>Resume</span>
              <box-icon
                type="solid"
                name="download"
                animation="fade-down"
                color="white"
              ></box-icon>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
