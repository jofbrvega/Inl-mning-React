import './App.css';
import React, { useState } from 'react';
import { 
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Footer from './components/Footer';
import ProductPage from './pages/Product';
import Checkout from './pages/Checkout';



function App() {

  const [items, setItems] = useState([]);
  const [sum, setSum] = useState(0);

  const addProducts = (newItem) => {

    setItems ([
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
       
          <Routes>
          <Route path="/"></Route>
          <Route path="product/:id" element={<ProductPage addProducts={addProducts} />}></Route>
          <Route path="/checkout" element={<Checkout sum={sum} items={items} addProducts={addProducts} />}></Route>
          </Routes> 
          <Footer />
     </BrowserRouter> 


    </div>
  );
}


export default App;
