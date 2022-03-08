import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Welcome from './components/Welcome';
import Header from './components/Header';
import Productpage from './Pages/Productpage';


function App() {
  const [toCart, setToCart] = useState([]); // item
  const [open, setOpen] = useState(false);
  

  const addToCart = (newAddtocart) => {
    setToCart([
      ...toCart,
      newAddtocart
    ])

   
  }

  return (
    <div className="App"> 
      <BrowserRouter>
        <Header
        open = {open}
        setOpen={setOpen} 
        toCart={toCart} 
        setToCart={setToCart} 
        countCartItem={toCart.length} 
        />
       <Routes> 
          <Route path='/' element={<Welcome />}></Route>
          <Route path='/home' element={<Productpage open = {open} setOpen={setOpen} addToCart={addToCart} toCart={toCart} setToCart={setToCart} countCartItem={toCart.length}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
