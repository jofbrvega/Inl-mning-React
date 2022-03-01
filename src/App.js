import './App.css';
import React from 'react';
import { 
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Footer from './components/Footer';
import Products from './pages/Product';
import ProductPage from './pages/Product';
import Checkout from './pages/Checkout';



function App() {
  return (
    <div className="App">

       <BrowserRouter>
          <Routes>
              <Route path="/products" element={ <Products /> }></Route>
              <Route path="/product/:id" element={ <ProductPage /> }></Route>
              <Route path="/checkout" element={ <Checkout /> }></Route>
          </Routes> 
          <Footer />
     </BrowserRouter> 

    </div>
  );
}

export default App;
