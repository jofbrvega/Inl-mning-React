import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Footer from './components/Footer';
import Product from './pages/Product';
import Checkout from './pages/Checkout';



function App() {
  return (
    <div className="App">
      
       <BrowserRouter>

        <Routes>
    
          <Route path="/:Id" element={ <Product /> }></Route>
          <Route path="/:Checkout" element={ <Checkout /> }></Route>

        </Routes> 

        <Footer />

     </BrowserRouter> 


    </div>
  );
}

export default App;
