// Detta är hämtaAPI funktionen som komponent.
import React, { useState, useEffect } from 'react'
import Addtocart from './Addtocart';
 

function Uploadproduct() {
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




  return (
    <div>
      <h1> Hämta API </h1>
      <div>
        {
          upload.map(upload  => (
            <section key={upload.id}>
              <h2>{upload.title}</h2>
              <h3>{upload.price}</h3>
              <p>{upload.description}</p>
              <img src={upload.url} ></img>     
              <Addtocart />
              </section>
          ))
        }
      </div>
    </div>
  )
}

export default Uploadproduct