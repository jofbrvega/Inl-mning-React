// Detta är kundvarukorgen

import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from 'styled-components'



function Cart({toCart, setToCart, opencartmenu,setOpen, open}) 
{
  return (
    <Style className={`cart ${open && 'open'}`}>
      <div className='closeBtn' onClick={() => setOpen(false)}><AiOutlineShoppingCart /></div>
      <button>Go to Cart</button> 


    {toCart && toCart.map(c => (
      <div className='cart-container'>
      <h2 className='carttitle' >{c.title}</h2>
      <span className='cartprice'>{c.price}</span>
      <img className='cartproduct' src={c.url}></img>
      </div>
    ))} 

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