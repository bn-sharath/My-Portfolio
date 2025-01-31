import Social from "./Social.jsx";
import Content from "./Content.jsx";
import "./home.css";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="title-conatiner">
          <div className="title">
            <span>
              <span className="hi">👋</span>
              <span> Hello!, </span>
              <span> I'm Sharath BN </span>
            </span>
          </div>

          <div className="subtitle">
            I am passionate and dedicated Software developer
          </div>
        </div>
        <div className="home-container">
          <div className="home-img-container">
            <div className="home-img"> </div>
          </div>
          <Content />

          <Social />
        </div>
      </section>
    </>
  );
}
