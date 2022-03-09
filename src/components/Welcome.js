// Detta är välkomstsidan/första sidan && path='/' (lägg till en designpattern).

import React from 'react'
import '../Styling/welcome.css'

function Welcome() {
  return (
    <div className='welcome-container'>
      <h1 className='welcome-title'>Welcome!</h1>
      <a className='welcome-link' href='/productpage'>Get to the shoes</a>
    </div>
  )
}

export default Welcome