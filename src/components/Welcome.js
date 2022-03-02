// Detta är välkomstsidan/första sidan && path='/' (lägg till en designpattern).

import React from 'react'

function Welcome() {
  return (
    <div>
      <h1>Välkommen!</h1>
      <a href='/home'>Klicka här för att komma till shoppingsidan</a>
    </div>
  )
}

export default Welcome