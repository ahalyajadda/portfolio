import React from 'react'
import "./About.css";
import img1 from "../assets/intro2.jpg";
import img2 from "../assets/intro1.jpg";
import { Link } from 'react-router-dom';
function About() {
  return (
    <div className='about'>
      <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Full-stack web developer.I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
      </div>
      <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} alt="true" className='img' />
                </div>
                <div className="img-stack bottom">
                    <img src={img2} alt="true" className='img' />
                </div>
            </div>
      </div>
    </div>
  )
}

export default About
