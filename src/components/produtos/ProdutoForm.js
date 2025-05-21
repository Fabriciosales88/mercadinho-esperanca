import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProdutoForm.css';

const ProdutoForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    quantidade: '',
    estoque: '',
    categoria: '',
    codigoBarras: '',
    fornecedor: '',
    dataTransferencia: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome do produto é obrigatório';
    }
    
    if (!formData.preco) {
      newErrors.preco = 'Preço é obrigatório';
    } else if (isNaN(formData.preco) || parseFloat(formData.preco) <= 0) {
      newErrors.preco = 'Preço deve ser um número positivo';
    }
    
    if (!formData.quantidade) {
      newErrors.quantidade = 'Quantidade é obrigatória';
    } else if (isNaN(formData.quantidade) || parseInt(formData.quantidade) < 0) {
      newErrors.quantidade = 'Quantidade deve ser um número não negativo';
    }
    
    if (!formData.estoque) {
      newErrors.estoque = 'Estoque é obrigatório';
    } else if (isNaN(formData.estoque) || parseInt(formData.estoque) < 0) {
      newErrors.estoque = 'Estoque deve ser um número não negativo';
    }
    
    if (!formData.categoria.trim()) {
      newErrors.categoria = 'Categoria é obrigatória';
    }
    
    if (formData.codigoBarras.trim() && !/^[0-9]+$/.test(formData.codigoBarras)) {
      newErrors.codigoBarras = 'Código de barras deve conter apenas números';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    // Aqui você implementaria a lógica para salvar o produto
    // Por enquanto, vamos apenas simular o salvamento
    
    alert('Produto cadastrado com sucesso!');
    
    // Redireciona para a lista de produtos
    navigate('/produtos');
  };

  const handleCancel = () => {
    navigate('/produtos');
  };

  return (
    <div className="produto-form-container">
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit} className="produto-form">
        <div className="form-group">
          <label htmlFor="nome">Nome do Produto *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className={errors.nome ? 'input-error' : ''}
          />
          {errors.nome && <span className="error-message">{errors.nome}</span>}
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="preco">Preço (R$) *</label>
            <input
              type="number"
              id="preco"
              name="preco"
              step="0.01"
              min="0"
              value={formData.preco}
              onChange={handleChange}
              className={errors.preco ? 'input-error' : ''}
            />
            {errors.preco && <span className="error-message">{errors.preco}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="quantidade">Quantidade *</label>
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              min="0"
              value={formData.quantidade}
              onChange={handleChange}
              className={errors.quantidade ? 'input-error' : ''}
            />
            {errors.quantidade && <span className="error-message">{errors.quantidade}</span>}
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="estoque">Estoque Mínimo *</label>
            <input
              type="number"
              id="estoque"
              name="estoque"
              min="0"
              value={formData.estoque}
              onChange={handleChange}
              className={errors.estoque ? 'input-error' : ''}
            />
            {errors.estoque && <span className="error-message">{errors.estoque}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="categoria">Categoria *</label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              className={errors.categoria ? 'input-error' : ''}
            />
            {errors.categoria && <span className="error-message">{errors.categoria}</span>}
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="codigoBarras">Código de Barras</label>
            <input
              type="text"
              id="codigoBarras"
              name="codigoBarras"
              value={formData.codigoBarras}
              onChange={handleChange}
              className={errors.codigoBarras ? 'input-error' : ''}
            />
            {errors.codigoBarras && <span className="error-message">{errors.codigoBarras}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="fornecedor">Fornecedor</label>
            <input
              type="text"
              id="fornecedor"
              name="fornecedor"
              value={formData.fornecedor}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="dataTransferencia">Data para Transferência</label>
          <input
            type="date"
            id="dataTransferencia"
            name="dataTransferencia"
            value={formData.dataTransferencia}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-actions">
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancelar
          </button>
          <button type="submit" className="btn-submit">
            Cadastrar Produto
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProdutoForm;
