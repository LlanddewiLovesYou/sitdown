import React from 'react'

import './dice.css'
// import { refresh } from './util/refresh.js'

const handleClick = () => {
  window.location.reload()
}

export function Dice(props) {
  return(
    <div className='dice-wrapper'>
      <div className="dice-number" onClick={handleClick}>{props.diceRoll}</div>
      <span title="Click to re-roll">
        <img src="https://i.pinimg.com/originals/f2/2a/65/f22a65580dad3290bf6bd64ba409e730.jpg" className='dice-image'onClick={handleClick}/>
      </span>
    </div>
  )
}