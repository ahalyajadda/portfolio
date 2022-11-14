import React from 'react'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Work1 from '../components/Work1';
function Project() {
  return (
    <div>
      <Navbar/>
      <Hero2  heading="PROJECTS." text="Some of my recent projects"/>
      <Work1/>
      <Footer/>
    </div>
  )
}

export default Project
