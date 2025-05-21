import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>Mercadinho Esperança</h1>
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/clientes">Clientes</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
