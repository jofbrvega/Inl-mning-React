import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/checkout.css';
import { useEffect } from 'react'


function Checkout({ items, sum }) {


  useEffect(() => {

    console.log(items)

  }, [items])

  let content = (

    <div className='nothing-in-checkout-page'>
      <h2 className='go-back-text'>Nothing here, go back to shopping!</h2>
      <Link to="/"><button className='back-to-homepage-btn'>Back to products </button></Link>
      {items?.map(i => (
        <p>ID: {i.id}</p>
      ))}
    </div>

  )

  if (items.length >= 1) {

    content = (

      <div className='product-parent-checkout'>
        <div className='checkout-container'>

          {items.map(shoes => (
            <table info-parent-checkout>
              <tr className='info-in-checkout'>
                <th><img src={shoes.url} size='20px' alt='checkoutimage' className='checkout-img'></img></th>
                <td>< h1 className='title-checkout'>{shoes.title + ' -'}</h1></td>
                <td>< h2 className='price-checkout'>{shoes.price} SEK</h2></td>
              </tr>
            </table>


          ))}


        </div>



        <div className='input-info-container'>

          <h2 className='payment-title'>Payment</h2>
          <h3 className='payment-info'>Please choose payment method in next step</h3>

          <label>Firstname:</label>
          <input type="text" namn="firstname" className='customer-form' />

          <label>Lastname:</label>
          <input type="text" namn="lastname" className='customer-form' />

          <label>Telephone:</label>
          <input type="text" namn="phonenumber" className='customer-form' />

          <label>E-mail:</label>
          <input type="text" namn="emailaddress" className='customer-form' />

          <label>Address:</label>
          <input type="text" namn="shippingaddress" className='customer-form' />

          <label>Zipcode:</label>
          <input type="text" namn="zipcode" className='customer-form' />

          <div className='payment-chart'>

            
          <button type='button' className='place-order-btn'>Place order</button>
          </div>

          <div className='order-total'> Order summary: {sum} SEK</div>


        </div>

      </div>
    )
  }

  return (
    <div className='checkout-wrapper'>
      <div className='checkout-products'>
        <h2 className='checkout-title'>Checkout</h2>

        {content}

      </div>
    </div>
  );
}

export default Checkout