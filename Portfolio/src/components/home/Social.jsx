
import './social.css'

export default function Social() {
  return (
    <>
      <div className="social-container">
        <a href="#" target="_blank">
          <box-icon type="logo" name="github" size='md'></box-icon>
        </a>
        <a href="#" target="_blank">
          <box-icon type="logo" name="linkedin-square" size='md'> </box-icon>
        </a>
        <a href="#" target="_blank">
          <box-icon type="logo" name="gmail" size='md'></box-icon>
        </a>
      </div>
    </>
  );
}
