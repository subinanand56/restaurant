
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Pages/Menu';
import Order from './Pages/Order';
import Footer from './Pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Menu/>} /> 
      <Route exact path="/order" element={<Order/>} /> 
      <Route exact path="/footer" element={<Footer/>} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;

