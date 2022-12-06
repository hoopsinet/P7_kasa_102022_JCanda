import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Product from "./pages/products/Products"
import Error from "./pages/error/Error"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;