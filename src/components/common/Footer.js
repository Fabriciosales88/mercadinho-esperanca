import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mercadinho Esperança</h3>
          <p>Sistema de cadastro de clientes e produtos</p>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: contato@mercadinhoesperanca.com</p>
          <p>Telefone: (00) 0000-0000</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mercadinho Esperança - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
