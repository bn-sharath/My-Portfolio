import { useState } from "react";
import "./header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const OnclickToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header ">
        <nav className="nav">
          <div className="menu-icon">
            <div className={isOpen ? "show" : "hidden"} onClick={OnclickToggle}>
              <box-icon name="x" size="lg"></box-icon>
            </div>
            <div
              className={!isOpen ? "show" : "hidden"}
              onClick={OnclickToggle}
            >
              <box-icon name="menu" size="lg"></box-icon>
            </div>
          </div>

          <div className="nav-title"> Sharath</div>

          <div className={isOpen ? "nav-menu" : "hidden nav-menu"}>
            <ul>
              <li className="menu">
                <a href="#">
                  <div className="menu-title">Home</div>

                  <box-icon name="home-smile"></box-icon>
                </a>
              </li>
              <li className="menu">
                <a href="#">
                  <div className="menu-title">About</div>

                  <box-icon name="user-circle"></box-icon>
                </a>
              </li>
                <li className="menu">
                <a href="#">
                  <div className="menu-title">Qualification</div>

                  <box-icon name="book"></box-icon>
                </a>
              </li>
              <li className="menu">
                <a href="#">
                  <div className="menu-title">Skills</div>
                  <box-icon name="code-alt"></box-icon>
                </a>
              </li>
              <li className="menu">
                <a href="#">
                  <div className="menu-title">Works</div>
                  <box-icon name="briefcase"></box-icon>
                </a>
              </li>
            
              <li className="menu">
                <a href="#">
                  <div className="menu-title">Contact</div>

                  <box-icon name="paper-plane"></box-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
