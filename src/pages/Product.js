import React, { useState, useEffect } from 'react'
/* import { useParams } from 'react-router-dom' */

function ProductPage() {

  const [shoe, setProducts] = useState({});
  
   /*  const params = useParams(); */

    const fetchData = async () => {
        try {
            const response = await fetch('https://codexplained.se/shoes.php?id=678453');
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
        <article key={shoe.id}>
        <p>{shoe.title}</p>
          <img src={shoe.url} alt='nike shoes'/>
          <p>{shoe.description}</p>
          <p>{shoe.price}</p>
          <p>{shoe.storage}</p>
          <button>Add shoes to cart</button>
        </article>
       
        </div>
    )
 
}

export default ProductPage