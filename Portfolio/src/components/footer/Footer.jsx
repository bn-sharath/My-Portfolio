import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-title">Sharath</div>
        <div className="icon-container">
          <a href="">
            <box-icon type="logo" name="github"></box-icon>
          </a>
          <a href="">
            <box-icon type="logo" name="linkedin"></box-icon>
          </a>
          <a href="mailto:sharathbn2001@gmail.com">
            <box-icon type="logo" name="gmail"></box-icon>
          </a>
          <a href="tel:+918884613804">
            <box-icon name="phone-call" type="solid"></box-icon>
          </a>
        </div>
        <div className="nav-container">
          <a href="#home">Home</a>
          <a href="#works">Works</a>
          <a href="#skills">Skills</a>
          <a href="#qualification">Qualification</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="copyright">©2025 copyright. Designed by Sharath</div>
      </div>
    </>
  );
}
