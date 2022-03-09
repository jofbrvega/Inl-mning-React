// Detta är kundvarukorgen

import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../Styling/cart.css'




function Cart({items, setOpen, open, sum}) 
{
  const [closecart, setClosecart] = useState(false);
  return (
    
    <Style 
    className={`cart ${open && 'open'}`}>
      <div className='openBtn' onClick={() => setOpen(false)}><button><AiOutlineShoppingCart /></button></div>
      <div className='closeBtn' onClick={() => setOpen(true)}><button>Close cart</button></div>
     
    {items && items.map(c => (
      <div className='cart-container'>
      <h2 className='carttitle' >{c.title}</h2>
      <span className='cartprice'>{c.price}</span>
      <img className='cartproduct' src={c.url}></img>
      </div> 
    ))}
        
    <div>Order summary {sum}</div>
    <Link to='/checkout'>Go to checkout</Link>     
    </Style> 
  
  )   
  
}


const Style = styled.div`
  width: 400px;
  max-height: 500px ;
  background: pink;
  position: absolute;
  top: 1em;
  right: 1em;
  transition: 500ms;
  transform: translateX(100%);

  &.open {
    transform: translateX(0)
  }
`


export default Cart