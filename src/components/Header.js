// Header med cart-knapp 

import React, {useState}from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from './Cart';

function Header({ open, setOpen, toCart, setToCart, countCartItem }) { //item
  const [opencart, setOpenCart] = useState(false);
  



  const addToCart = (addToCart) => {
    console.log('You just clicked this')
    setOpenCart([...opencart, addToCart])
  }
  
  return (
    <div>
      <header className='header'>
        <div className='header-name'>
        <h1>INSERTNAMEHERE</h1>
        </div>
      <div className='cart-container'>
        <div className='header-cart'>
          
              <button onClick={() => {setOpen(true)}}>
                <Cart
                  open = {open}
                  toCart={toCart}
                  setToCart={setToCart}
                  setOpen={setOpen} 
                /> 
                {countCartItem}
               <AiOutlineShoppingCart /> 
                </button>
  
          </div>
          </div>
      </header>
      </div>
      
   
  )
}

export default Header

