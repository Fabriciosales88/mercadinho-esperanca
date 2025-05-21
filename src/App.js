import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Sidebar from './components/common/Sidebar';
import Home from './components/pages/Home';
import ProdutoForm from './components/produtos/ProdutoForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos/cadastro" element={<ProdutoForm />} />
              <Route path="/produtos" element={<h2>Lista de Produtos</h2>} />
              <Route path="/clientes" element={<h2>Lista de Clientes</h2>} />
              <Route path="/clientes/cadastro" element={<h2>Cadastro de Clientes</h2>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

