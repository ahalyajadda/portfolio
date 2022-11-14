import React from 'react'
import { Link } from 'react-router-dom';
import Introimg from "../assets/intro.jpg";
import "./Heroimg.css";
function Heroimg() {
  return (
    <div className='hero'>
        <div className="mask">
            <img src={Introimg} alt="Introimg" className="intro-img" />
        </div>
        <div className="content">
            <p>HI, I'M Ahalya Varshitha Jadda</p>
            <h1>Full-Stack Web Developer</h1>
            <div>
                <Link to="/project" className='btn'>
                    Projects
                </Link>
                <Link to="/contact" className=' btn btn-light'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
