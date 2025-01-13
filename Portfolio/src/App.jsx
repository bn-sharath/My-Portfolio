
import "./app.css";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Line from "./components/line/Line.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/skills.jsx";
import Works from "./components/works/Works.jsx";
import Qualification from "./components/qualification/Qualification.jsx"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Line />
        <About />
        <Line />
        <Qualification />
        <Line />
        <Skills />
        <Line />
        <Works />
        <Line />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
