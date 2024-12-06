// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Profile from './components/Profile';
import { CartProvider } from './components/CartContext'; // Importa el CartProvider
import Branches from './components/Branches'; // Importa el componente Branches

function App() {
  return (
    <CartProvider>  {/* Envuelve la aplicación con CartProvider */}
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/branches" element={<Branches />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
