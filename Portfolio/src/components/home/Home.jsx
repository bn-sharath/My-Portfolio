import Social from "./Social.jsx";
import Content from "./Content.jsx";
import "./home.css";

export default function Home() {
  return (
    <>
      <section id="home">
        <div className="title-conatiner">
          <div className="title">Hello! 👋, I'm Sharath BN</div>
          {/* <div className="subtitle">Software developer</div> */}
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
