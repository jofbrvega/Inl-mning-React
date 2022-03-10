// Detta är kundvarukorgen

import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../Styling/cart.css'




function Cart({items, setOpen, open, sum}) 
{
  return (
    
    <Style 
    className={`cart ${open && 'open'}`}>

    {items && items.map(c => (
      <div className='cart-container'>
      <img className='cartproduct' src={c.url}></img>
      <h2 className='carttitle' >{c.title}</h2>
      <span className='cartprice'>{c.price}KR</span>
      
      </div> 
    ))}
    
    <div className='menu-footer'>
    <div className='summary'>Order summary {sum}KR</div>
        <Link to='/checkout' className='go-tocheckout'  style={{ textDecoration: 'none' }}>Go to checkout</Link>     
      </div>
    </Style> 
  
  )   
  
}


const Style = styled.div`
  width: 400px;
  max-height: 500px ;
  background: pink;
  position: fixed;
  top: 1em;
  right: 1em;
  transition: 500ms;
  transform: translateX(100%);

  &.open {
    transform: translateX(0)
  }
`


export default Cart