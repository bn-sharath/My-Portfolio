import React from 'react'
import './app.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Line from './components/line/Line.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Home/>
        <Line/>
        <About/>
        <Line/>
        <Experience/>
        <Line/>

        <Line/>
        <Line/>
        <Contact/>
        <Footer/>
      </main>
      
    </>
  )
}

export default App
