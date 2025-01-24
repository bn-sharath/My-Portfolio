import "./about.css";
import myImage from "../../assets/about.jpg";
import info from "./info.js";

export default function About() {
  return (
    <>
      <h1 className="all-title">About Me</h1>
      
      <div className="about-container">
        <div className="about-img-container">
          <img src={myImage} alt="My Image" className="my-image" />
        </div>
        <div className="info-container">
          <h3>My introduction</h3>
          {info.introduction}
        </div>
      </div>
    </>
  );
}
