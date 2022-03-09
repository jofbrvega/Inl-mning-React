// Header med cart-knapp 

import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from './Cart';
import {Link} from 'react-router-dom'
import '../Styling/header.css'

function Header({ open, setOpen, items, setItems, countCartItem, sum, checkout }) { //item
  const [opencart, setOpenCart] = useState(false);


  const addToCart = (addToCart) => {
    console.log('You just clicked this')
    setOpenCart([...opencart, addToCart])
  }



  return (
    <div>
      <header className='header'>
        <div className='header-name'>
          <Link to="/productpage"><h1 className='logo'>Our name</h1></Link>
        </div>
        <div className='cart-container'>
          <div className='header-cart'>

            <button onClick={() => { setOpen(true) }}>
              <Cart
                open={open}
                items={items}
                setItems={setItems}
                setOpen={setOpen}
                sum = {sum}
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

