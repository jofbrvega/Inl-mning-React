import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Styling/products.css' 

function Productpage({ addProducts}) {
  const [upload, setUpload] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://codexplained.se/shoes.php');
    const data = await response.json();
    console.log(data)
    setUpload(data); 
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddBtn = (upload) => {
    addProducts(upload)
  }
 
  const handleClick = (upload) => {
    addProducts(upload)
  }

  return (
    <div className='product-pagecontainer'>
      <h1 className='products-title'>Our Products</h1>
      <div className='product-container'>
        
        {upload.map((upload) => (
          <div className='items' key={upload.id} >
            <div className='product-box'>
              <div className='product-description'>
                <Link to={`/product/${upload.id}`}>
                  {" "}
                  <img className='product-image' src={upload.url} alt={upload.title}></img>
                  </Link>
                  <div className='description-box'>
                <span className='price'>{upload.price + ' SEK'}</span>
                <span className='description'>{upload.description}</span>
                <div className='button-div'>
                <button className='btn-add' onClick={() => { handleAddBtn(upload) }}> Add To Cart </button>
              </div>        
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productpage