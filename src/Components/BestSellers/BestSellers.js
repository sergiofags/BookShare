import '../../Home/App.css';
import Carrossel from '../Carrossel/Carrossel';
import data from '../../Utils/books.json';


function BestSellers() {
  return (
    <div className="best-sellers">
      <h1>Best sellers</h1>
      <Carrossel livros={data} />
    </div>
  );
}

export default BestSellers;