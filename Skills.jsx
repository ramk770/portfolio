import React from 'react'
import skills from './compontent/image/skill.jpg';
import LinearProgress from '@mui/material/LinearProgress';
import './Skills.css'
function Skills() {
  return (
    <div id='Skill' className='skillcomtent'>
      <div className='skillcontent_text'>
        <img src={skills}  alt='' className='image'/>
      </div>
      <div className='skill_textcontent'>
        <h1>Skills <span>List</span></h1>
        <div className='skillscontainer-site'>
          <h5>Reactjs</h5>
          <div className='skillContainer_slider skillcontainer_slider1' >
          <LinearProgress variant="determinate" value={90} id="line1"/>
          </div>
        </div>
        <div className='skillscontainer-site'>
          <h5>node js</h5>
          <div className='skillContainer_slider skillcontainer_slider2'>
          <LinearProgress variant="determinate"  value={60} />
          </div>
        </div>
        <div className='skillscontainer-site'>
          <h5>express js</h5>
          <div className='skillContainer_slider skillcontainer_slider3'>
          <LinearProgress variant="determinate" value={100} />
          </div>
        </div>
        <div className='skillscontainer-site'>
          <h5>ReactNative</h5>
          <div className='skillContainer_slider skillcontainer_slider4'>
          <LinearProgress variant="determinate" value={50} />
          </div>
        </div>
        <div className='skillscontainer-site'>
          <h5>mongoDB</h5>
          <div className='skillContainer_slider skillcontainer_slider5'>
          <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className='skillscontainer-site'>
          <h5>java</h5>
          <div className='skillContainer_slider skillcontainer_slider6'>
          <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Skills