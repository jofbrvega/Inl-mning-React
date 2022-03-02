import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Getimage() {
  const url = 'https://codexplained.se/shoes.php'
  const [productImage, setProductImage] = useState(null)

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setProductImage(response.data)
      })
  }, [url])

  return (
    <div>Getimage</div>
  )
}

export default Getimage