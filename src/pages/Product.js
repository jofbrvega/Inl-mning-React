import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../Styling/product.css'

function ProductPage() {

  const [shoes, setProducts] = useState({});
   const params = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/shoes.php?id=' + params.id);
            const data = await response.json();
            console.log(data);

            setProducts(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    


    return (

        <div className='shoe-items'>
            <article key={shoes.id}>
              <div className='shoe-info'>
                  <p className='shoe-title'>{'Our Bestseller - ' + shoes.title}</p>
                   <img className='shoe-img' src={shoes.url} alt='nike shoes' width={'50%'}/>
                      <div className='shoe-description'>
                        <p className='shoe-about'>{shoes.description}</p>
                        <p className='shoe-price'>{'Cost: ' + shoes.price + ':-'}</p>
                        <p className='shoe-quantity'>{'Quantity: ' + shoes.storage + ' pairs'}</p>
                      </div>
                   <button className='addproduct-button'>Add to cart</button>
              </div>
            </article>
        </div>
    )
  
}

export default ProductPage