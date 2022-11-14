import React from 'react'
import Footer from '../components/Footer'
import Heroimg from '../components/Heroimg'
import Navbar from '../components/Navbar'
import Work1 from '../components/Work1'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Heroimg/>
      <Work1/>
      <Footer/>
    </div>
  )
}

export default Home
