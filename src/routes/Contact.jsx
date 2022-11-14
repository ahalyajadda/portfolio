import React from 'react'
import Form from "../components/Form";
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';
import Navbar from "../components/Navbar";
function Contact() {
  return (
    <div>
         <Navbar/>
         <Hero2 heading="CONTACT." text="Lets have a chat" />
          <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
