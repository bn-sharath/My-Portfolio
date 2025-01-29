import "./app.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
// import Line from "./components/line/Line.jsx";
// import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/skills.jsx";
import Works from "./components/works/Works.jsx";
import Qualification from "./components/qualification/Qualification.jsx";
import Darkhole from "./components/animation-components/Darkhole.jsx";

function App() {
  return (
    <>
      <Darkhole />
      <Header />
      <main className="main">
        <Home />

        {/* <About /> */}

        <Works id="works" />
        <Qualification id="qualification" />

        <Skills id="skills" />

        <Contact id="contact" />
      </main>
      <Footer />
    </>
  );
}

export default App;
