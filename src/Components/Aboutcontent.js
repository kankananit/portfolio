import './AboutContent.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Aboutcontent = () => {
  return (
    <div className='about'>
      <div className='left'>
        <h1>Who Am I</h1>
        <p>I'm a react font-end developer.I create responsive secure websites for my clients</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>

        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
            <div className='img-stack top'>
            <img src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600" className='img' alt='true'/>
            </div>
            <div className='img-stack bottom'>
            <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600" className='img' alt='true'/>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Aboutcontent
