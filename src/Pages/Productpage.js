import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
    <div>
      <div className='product-container'>
        <h1>Productpage</h1>
        {upload.map((upload) => (
          <div key={upload.id} >
            <div className='product-box'>
              
              <div className='product-description'>
                <Link to={`/product/${upload.id}`}>
                  {" "}
                  <img className='product-image' src={upload.url} alt={upload.title}></img>
                  </Link>
                <span className='price'>{upload.price}</span>
                <span className='description'>{upload.description}</span>
                <button className='btn-add' onClick={() => { handleAddBtn(upload) }}> Add To Cart </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Productpage