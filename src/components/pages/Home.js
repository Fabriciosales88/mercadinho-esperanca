import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Bem-vindo ao Sistema do Mercadinho Esperança</h1>
        <p>Sistema de gerenciamento de produtos e clientes</p>
      </div>
      
      <div className="dashboard">
        <div className="dashboard-card">
          <h2>Produtos</h2>
          <p>Gerencie o cadastro de produtos, estoque e fornecedores</p>
          <a href="/produtos" className="dashboard-link">Acessar Produtos</a>
        </div>
        
        <div className="dashboard-card">
          <h2>Clientes</h2>
          <p>Cadastre e gerencie informações de clientes</p>
          <a href="/clientes" className="dashboard-link">Acessar Clientes</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
