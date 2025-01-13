import "./content.css";
import resume from "../../assets/Sharath.pdf"

export default function Content() {
  return (
    <>
    
      <div className="content-container">
       
        <div className="description">
          An innovative and results-oriented software developer with over 2
          years of comprehensive experience in designing, coding and
          implementing scalable applications
        </div>
        <div className="download-container">
          <a href={resume} download=''>
          <button className="button download-btm">
            <span>Resume</span>
            <box-icon type="solid" name="download" animation="fade-down" color="white"> </box-icon>
          </button>
          </a>
        </div>
      </div>
    </>
  );
}
