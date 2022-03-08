// Detta är hämtaAPI funktionen som komponent.
import React, { useState, useEffect } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
 

function Uploadproduct() {
  const [cart, setCart] = useState([]); 
  const [upload, setUpload] = useState([]);
  const [page, setPage] = useState ('products')
  const fetchData = async () => {
    const response = await fetch('https://codexplained.se/shoes.php');
    const data = await response.json();
    console.log(data)
    setUpload(data);
  }
  useEffect(() => {
    fetchData();
  }, [])

  const addToCart = () => {
    console.log('You just clicked this')
    setCart([...cart, upload])
  }

  const renderCart = () => {
    <div className='product-container'>
      <h1>Cart</h1>
      {upload.map((upload, id) => (
        <div key={upload.id} >
          <div className='product-box'>
            <img className='product-image' src={upload.url} alt="image"></img>
            <div className='product-description'>
              <span className='title'>{upload.title}</span>
              <span className='price'>{upload.price}</span>
              <span className='description'>{upload.description}</span>
             
            </div>
          </div>
        </div>
      ))}
    </div> 
  }

  return (
    <div>
      <header>
        <button>Go to cart {cart.length} </button>
        </header>
        {page === 'products' && (
          <>
    <div className='product-container'>
        {upload.map((upload, id)  => ( 
            <div key={upload.id} > 
                <div className='product-box'>
                <img className='product-image' src={upload.url} alt="image"></img>
                <div className='product-description'>
                <span className='title'>{upload.title}</span>
                <span className='price'>{upload.price}</span> 
                <span className='description'>{upload.description}</span>
                <button onClick={() => addToCart(upload)}><AiOutlineShoppingCart /> </button>
              </div>
              </div>
              </div> 
          ))}
      </div>
      </>
        )}          
        {page === 'cart' && renderCart()}      
    </div> 
  )
}

export default Uploadproduct