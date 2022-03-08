import React, { useState, useEffect } from 'react'

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
  }, [])

  const handleAddBtn = (upload) => {
    console.log('You just added an item')
    addProducts(upload)
  }
  return (
    <div>
      <div className='product-container'>
        <h1>Productpage</h1>
        {upload.map((upload, id) => (
          <div key={upload.id} >
            <div className='product-box'>
              <img className='product-image' src={upload.url} alt="image"></img>
              <div className='product-description'>
                <button className='title'>{upload.title}</button>
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