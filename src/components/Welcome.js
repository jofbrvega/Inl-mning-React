// Detta är välkomstsidan/första sidan && path='/' (lägg till en designpattern).

import React from 'react'
import '../Styling/welcome.css'

function Welcome(open, setOpen) {
  return (
    <div className='welcome-container'>
      <div className='welcome'>
      <h1 className='welcome-title'>Welcome!</h1>
      </div>
      <div className='click-here'>
      <a className='welcome-link' href='/productpage'>Click here to shop</a>
      </div>
    </div>
  )
}

export default Welcome