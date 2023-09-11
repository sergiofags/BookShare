import React from "react";
import './Livro.css';
import AvaliacaoEstrelas from '../AvaliacaoEstrelas/AvaliacaoEstrelas';

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
      <h3 className='book-name'>{livro.Nome}</h3>
      <p className='preco'>{livro.Preco}</p>
      <div className='avaliacao'>
        <AvaliacaoEstrelas avaliacao={livro.Avaliacao} /> 
        <p>{livro.Avaliacao}</p>
      </div>
      
    </div>

    


  );
}

export default Livro;
