import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Início
            </Link>
          </li>
          <li>
            <Link to="/produtos">
              <i className="fas fa-box"></i> Produtos
            </Link>
            <ul className="submenu">
              <li><Link to="/produtos/cadastro">Cadastrar Produto</Link></li>
              <li><Link to="/produtos">Listar Produtos</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/clientes">
              <i className="fas fa-users"></i> Clientes
            </Link>
            <ul className="submenu">
              <li><Link to="/clientes/cadastro">Cadastrar Cliente</Link></li>
              <li><Link to="/clientes">Listar Clientes</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
