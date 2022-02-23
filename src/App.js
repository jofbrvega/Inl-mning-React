import './App.css';
import React from 'react';
import Products from './components/Products';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes> 
          <Route path='/' element={<Welcome />}></Route>
          <Route path='/home' element={<Products />}></Route>
          <Route path='/nav' element={<Nav />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
