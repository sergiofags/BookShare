import '../../Home/App.css';
import CarrosselRecentes from '../CarrosselRecentes/CarrosselRecentes';
import data from '../../Utils/books.json';

function RecentAnnouncements() {
  return (
    <div className="recent-announcements">
      <h1>Recent announcements</h1>
      <CarrosselRecentes livros={data} />
    </div>
  );
}

export default RecentAnnouncements;