import React from 'react'
import '../Styling/footer.css'


/* const FooterStyle = styled.FooterStyle `
  fontSize: 20px;
  font-weight: bold;
  line-height: 3rem;
  textalign: center;
  padding: 2rem;
  backgroundColor: #D18CAA;
  color: #D1CCB0;
  `;
 */ 

function Footer() {

  return (
    <div className='Footer'>
    <p>About Us</p>
    <p>Contact Us</p>
    <p>Terms and Condition</p>

    <div className='Footercopy'> Copyright &copy; 2022</div>
    </div>

  )
}

export default Footer
