import "./contact.css";

export default function Contact() {
  return (
    <>
    <section id="contact">

      <div className="all-title">Contact Me</div>
      <div className="contact-container">
        <div className="container contact-box">
          <div>
            <box-icon name="phone-call"></box-icon>|<box-icon type="logo" name="whatsapp"></box-icon>
          </div>
          <span>Call | WhatsApp </span>
          <span>+91-8884613804</span>
        </div>
        <div className="container contact-box">
          <box-icon name="envelope"></box-icon>
          <span>Mail ID</span>
          <span>Sharathbn2001@gmail.com</span>
        </div>
      </div>
    </section>

    </>
  );
}
