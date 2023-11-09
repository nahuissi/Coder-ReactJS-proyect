import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="index.js">Tienda De Ropa</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="cuchillos.js">Zapatos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Remeras</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Zapatillas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pantalones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Camperas</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;