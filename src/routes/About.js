import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Image2 from '../Components/Image2'
import Aboutcontent from '../Components/Aboutcontent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading="ABOUT." text="Im a frinedly Front-End Developer"
      />
      <Aboutcontent/>
      <Footer/>
    </div>
  )
}

export default About
