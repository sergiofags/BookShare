import React, { useState, useEffect } from "react";
import Livro from "../Livro/Livro";

function Carrossel({ livros }) {
  const [startIndex, setStartIndex] = useState(0);
  const [sortedLivros, setSortedLivros] = useState([]);

  useEffect(() => {
    const sorted = [...livros].sort((a, b) => b.Vendas - a.Vendas);
    setSortedLivros(sorted);
  }, [livros]);

  const nextGroup = () => {
    setStartIndex(startIndex + 5);
  };

  const prevGroup = () => {
    setStartIndex(startIndex - 5);
  };

  const displayedLivros = sortedLivros.slice(startIndex, startIndex + 5);

  return (
    <div className="carrossel">
      <button onClick={prevGroup} disabled={startIndex === 0} className='sides-buttons'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
      </button>

      <div className="livros-container">
        {displayedLivros.map((livro) => (
          <Livro key={livro.Id} livro={livro} />
        ))}
      </div>

      <button onClick={nextGroup} disabled={startIndex + 5 >= sortedLivros.length} className='sides-buttons'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>
  );
}

export default Carrossel;