import React from 'react'
import {FaHome, FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                <div>
                    <p>Guntur(D), Nekarikallu(M), Cheemalamari(V)</p>
                    <p>Andhra Pradesh</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    +91-6305352809
                </h4>
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    varshithajadda@gmail.com
                </h4>
                
            </div>
        </div>
        <div className="right">
            <h4>About Me</h4>
            <p>This is me J.Ahalya Varshitha.Full stack developer.</p>
            <div className="social">
            <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} />
            <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />
             <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
