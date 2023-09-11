import './App.css';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import BestSellers from '../Components/BestSellers/BestSellers';
import RecentAnnouncements from '../Components/RecentAnnouncements/RecentAnnouncements';

function App() {
  return (
    <>
      <div className="screen-one">
        <div className="container">
          <Header />
          <Banner />
        </div>
      </div>

      <div className="screen-two" id='screen-two'>
        <div className="container">
          <main>
            <BestSellers />
            <RecentAnnouncements />
          </main>
        </div>
      </div>
      <div>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
