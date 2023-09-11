import React from "react";
import '../Livro/Livro.css'

function AvaliacaoEstrelas({ avaliacao }) {
  const estrelas = [];

  for (let i = 0; i < 5; i++) {
    if (i < avaliacao) {
      estrelas.push(
        <span key={i} className="avaliacao-estrela ativa">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4C00ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </span>
      );
    } else {
      estrelas.push(
        <span key={i} className="avaliacao-estrela">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#858585" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </span>
      );
    }
  }

  return <div className="avaliacao-estrelas">{estrelas}</div>;
}

export default AvaliacaoEstrelas;
