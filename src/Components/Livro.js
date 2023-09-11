import React from "react";
import './Livro.css';

function Livro({ livro }) {
  return (
    <div className="livro">
      <div class="book">
      <div class="book-cover">
        <img src={livro.Capa} />
      </div>
      <div class="book-spine">
        <h1>BOOKSHARE</h1>
      </div>
    </div>
      <br />
      <h3>{livro.Nome}</h3>
      <p>Autor: {livro.Autor}</p>
      <p>Gênero: {livro.Genero}</p>
      <p>Preço: {livro.Preco}</p>
      <p>Vendas: {livro.Vendas}</p>
    </div>

    


  );
}

export default Livro;
