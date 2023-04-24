import './Workcard.css'
import WorkCard from './Workcard'
import WordCardData from './Workcarddata'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>
        Projects
      </h1>
        <div className='project-container'>
            {WordCardData.map((val,ind)=>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work
