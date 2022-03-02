import React from 'react'
import {FooterStyle} from 'styled-components'


const FooterStyle = styled.FooterStyle `
  fontSize: 20px;
  font-weight: bold;
  line-height: 3rem;
  textalign: center;
  padding: 2rem;
  backgroundColor: #D18CAA;
  color: #D1CCB0;
  `;

function Footer() {

  

  return (
    <div>
    <FooterStyle/>
    <p>About Us</p>
    <p>Contact Us</p>
    <p>Terms and Condition</p>
    <FooterStyle/>
    </div>

  )
}

export default Footer
