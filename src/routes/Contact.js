import React from 'react'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import Image2 from '../Components/Image2'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
