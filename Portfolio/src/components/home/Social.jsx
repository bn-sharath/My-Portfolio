
import './social.css'

export default function Social() {
  return (
    <>
      <div className="social-container">
        <a href="https://github.com/bn-sharath" target="_blank">
          <box-icon type="logo" name="github" size='md'></box-icon>
        </a>
        <a href="https://www.linkedin.com/in/sharath-bn-290b82220" target="_blank">
          <box-icon type="logo" name="linkedin-square" size='md'> </box-icon>
        </a>
        <a href='mailto:sharathbn2001@gmail.com' target="_blank">
          <box-icon type="logo" name="gmail" size='md'></box-icon>
        </a>
      </div>
    </>
  );
}
