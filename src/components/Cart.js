// Detta är kundvarukorgen

import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from 'styled-components'




function Cart({items, setOpen, open, sum}) 
{
  return (
    <Style className={`cart ${open && 'open'}`}>
      <div className='closeBtn' onClick={() => setOpen(false)}><button><AiOutlineShoppingCart /></button></div>
      
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
  width: 500px;
  height: 500px;
  background: red;
  position: absolute;
  top: 0;
  right: 0;
  transition: 500ms;
  transform: translateX(100%);

  &.open {
    transform: translateX(0)
  }
`


export default Cart