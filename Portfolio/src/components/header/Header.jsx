import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header ">
        <nav className="nav container">
          {/* <div className="menu-icon">
            <div className="nav-close">
              <box-icon name="x"></box-icon>
            </div>
            <div className="nav-toggle">
              <box-icon name="menu"></box-icon>
            </div>
          </div> */}

          <div className="nav-title"> Sharath</div>
          
          <div className="nav-menu">
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
                  <div className="menu-title">Experience</div>

                  <box-icon name="briefcase"></box-icon>
                </a>
              </li>
              <li className="menu">
                <a href="#">
                  <div className="menu-title">Education</div>

                  <box-icon name="book"></box-icon>
                </a>
              </li>
              <li className="menu">
                <a href="#">
                  <div className="menu-title">Works</div>

                  <box-icon name="code-alt"></box-icon>
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
