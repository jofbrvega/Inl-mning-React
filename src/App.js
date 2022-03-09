import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Welcomepage from './components/Welcome'
import Header from './components/Header';
import Product from './pages/Product';
import Productpage from './pages/Productpage';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';


function App() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [sum, setSum] = useState(0);

  const addProducts = (newItem) => {
    setItems([
      ...items,
      newItem
    ])

    if (sum === 0) {
      setSum(newItem.price)
    } else {
      setSum(sum + newItem.price)
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header
        open={open}
        setOpen={setOpen}
        items={items}
        setItems={setItems}
        countCartItem={items.length}
        sum={sum}
      /> 
        <Routes>
          <Route path='/' element={<Welcomepage/>}></Route>
          <Route path='/productpage' element=
            {<Productpage
              open={open}
              setOpen={setOpen}
              addProducts={addProducts}
              items={items}
              setItems={setItems}
              countCartItem={items.length}
            />} />
          <Route path="/product/:id" element=
            {<Product
              addProducts={addProducts}
               />}>
          </Route>
          <Route path="/checkout" element=
            {<Checkout
              sum={sum}
              items={items}
              addProducts={addProducts} />}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
