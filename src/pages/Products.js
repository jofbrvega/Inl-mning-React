import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products() {

  const [ProductList, setProducts] = useState({});
  

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/shoes.php');
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
    <div>
      
      <h1>Our Products</h1>
        {
                ProductList.map( product => (
                    <article key={product._id}>
                        <Link to={`/product/${product._id}`}><p>{product.description} - {product.name}</p></Link>
                    </article>
                ))
            }
    </div>
  )
}

export default Products