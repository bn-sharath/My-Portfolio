import "./content.css";

export default function Content() {
  return (
    <>
      <div className="content-container">
        <div className="title">Sharath BN</div>
        <div className="subtitle" >Software developer</div>
        <div className="description">
          An innovative and results-oriented software developer with over 2
          years of comprehensive experience in designing, coding and
          implementing scalable applications
        </div>
        <div className="download-container">
          <button className="button download-btm">
            <span>Resume</span>
            <box-icon type="solid" name="download" animation="fade-down" color="white"> </box-icon>
          </button>
        </div>
      </div>
    </>
  );
}
