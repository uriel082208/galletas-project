import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import cafeLogo from '../images/cafe-logo.png'; // Imagen del logo

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={cafeLogo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/menu" className="navbar-link">Menú</Link>
        <Link to="/cart" className="navbar-link">carrito</Link>
        <Link to="/profile" className="navbar-link">Cuenta</Link>
        <Link to="/branches" className="navbar-link">Sucursales</Link>
      </div>
    </nav>
  );
}

export default Navbar;
