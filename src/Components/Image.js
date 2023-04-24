import './Image.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Introimg from '../assets/laptop1.jpg'
const Image = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={Introimg}/>
      </div>
      <div className='content'>
        <p>HI, I'M KANKANA DUTTA</p>
        <h1>React Developer</h1>
        <div>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
            
        </div>
      </div>
    </div>
  )
}

export default Image
