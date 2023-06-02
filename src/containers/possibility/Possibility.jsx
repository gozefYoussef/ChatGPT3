import React from 'react'
import possible from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='possibility section__padding' id='possibility'>
      <div className='possibility-image'>
        <img src={possible}/>
      </div>
      <div className="possibility-container">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
        <h4><a>Request Early Access to Get Started</a></h4>
      </div>
    </div>
  )
}

export default Possibility