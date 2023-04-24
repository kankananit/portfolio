import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Image2 from '../Components/Image2'
import PricingCard from '../Components/PricingCard'
import Workcard from '../Components/Workcard'
import Work from '../Components/Work'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
