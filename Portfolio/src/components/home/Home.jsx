import Social from "./Social.jsx";
import Content from "./Content.jsx";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="title-conatiner">
        <div className="title">Sharath BN</div>
        <div className="subtitle" >Software developer</div>
        </div>
        <div className="home-container">
          <div className="home-img-container">
            <Social />
            <div className="home-img"> </div>
          </div>
          <Content />
        </div>
      </section>
    </>
  );
}
