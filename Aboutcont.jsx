import React from 'react';
import { Link } from 'react-scroll';
import './Aboutcont.css'

function Aboutcont() {
  return (
    <div className='Aboutcontainer'>
    <div className='textcontent'>
    <h1>Mr Ramanarayanan k</h1>
    <p> i am  Mern stack developer</p>
    <a href='#'>
    <button >
    Download cvm
</button>
    </a>
   <Link to="Project" smooth={true} duration={500} >
    <button className='btn'>my work</button>
   </Link>
    </div>
        
    </div>
  )
}

export default Aboutcont