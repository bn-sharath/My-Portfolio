
import Social from './Social.jsx'
import Content from './Content.jsx'
import './home.css'

export default function Home() {
  return (
    <>
      <section className='home' >
        <div className="home-container">
            <div className="home-img"> </div>
            <Content/>
            <Social/>

        </div>
      </section>
    </>
  )
}
