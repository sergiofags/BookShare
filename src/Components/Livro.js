import React from "react";
import './Livro.css';

function Livro({ livro }) {
  return (
    <div className="livro">
      <img src={livro.Capa} alt={livro.Nome}/>
      <h3>{livro.Nome}</h3>
      <p>Autor: {livro.Autor}</p>
      <p>Gênero: {livro.Genero}</p>
      <p>Preço: {livro.Preco}</p>
      <p>Vendas: {livro.Vendas}</p>
    </div>
  );
}

export default Livro;
