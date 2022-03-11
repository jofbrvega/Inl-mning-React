// Header med cart-knapp 

import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from './Cart';
import { Link } from 'react-router-dom'
import '../Styling/header.css'

function Header({ open, setOpen, items, setItems, countCartItem, sum }) {
  
  return (
    <div>
      <header className='header'>
        <div className='header-name'>
          <Link to="/productpage" style={{ textDecoration: 'none' }}><h1 className='logo'>Kickass Kicks</h1></Link>
        </div>
        <div className='cart-containerheader'>
          <div className='header-cart'>
            <button className='cart-header' onClick={() => { setOpen(true) }}>
              <Cart
                items={items}
                setItems={setItems}
                open={open}
                setOpen={setOpen}
                sum={sum}
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

