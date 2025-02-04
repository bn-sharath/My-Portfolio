import "./contact.css";

export default function Contact() {
  return (
    <>
    <section id="contact" >

      <div className="all-title">Contact Me</div>
      <div className="contact-container">
        <a href="tel:+918884613804" className="container contact-box">
          <div className="scroll">
            <box-icon name="phone-call"></box-icon>|<box-icon type="logo" name="whatsapp"></box-icon>
          </div>
          <span className="scroll">Call | WhatsApp </span>
          <span className="scroll">+91-8884613804</span>
        </a>
        <a href="mailto:sharathbn2001@gmail.com" className="container contact-box">
          <box-icon name="envelope" className="scroll"></box-icon>
          <span className="scroll">Mail ID</span>
          <span className="scroll">Sharathbn2001@gmail.com</span>
        </a>
      </div>
    </section>

    </>
  );
}
