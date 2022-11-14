import React from 'react'
import AboutPage from "../components/About";
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
import Navbar from "../components/Navbar";
function About() {
  return (
    <div>
       <Navbar/>
       <Hero2 heading="ABOUT." text="Im a friendly Full-Stack web Developer."/>
       <AboutPage/>
      <Footer/>
    </div>
  )
}

export default About
