import './App.css';
import data from '../Utils/books.json'
import { useEffect, useState } from 'react';
import Carrossel from '../Components/Carrossel';
import CarrosselRecentes from '../Components/CarrosselRecentes';

function App() {
  return (
    <>
      <div className="screen-one">
        <div className="container">
          <header>
            <div className="menu">
              <div className='logo'>BOOKSHARE</div>
              <div>
                <div class="search">
                  <input type="text" class="search__input" placeholder="Search..."></input>
                  <button class="search__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  </button>
                </div>
              </div>
              <div>
                <ul>
                  <li className="links"><a href="http://localhost:3000">Home</a></li>
                  <li className="links"><a href="#screen-two">Books</a></li>
                  <li className="links"><a href="">What’s BookShare?</a></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="links"><a href="">Register</a></li>
                  <li className="links-r"><a href="">Sing In</a></li>
                </ul>
              </div>
            </div>

            <div className="banner">
              <div className='text-box'>
                <h1 className='title'>BookShare</h1>
                <h4 className='slogan'>Here you will explore all the worlds of literature.</h4>
              </div>
              <div className="image-box">
                <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/School-Clipart/Paper_Plane_PNG_Clip_Art_Image.png?m=1469069701" alt="" />
              </div>
            </div>
          </header>
      </div>

      <div className="screen-two" id='screen-two'>
        <div className="container">
          <main>
            <div className="best-sellers">
              <h1>Best sellers</h1>
              <Carrossel livros={data} />
            </div>
            <div className="recent-announcements">
              <h1>Recent announcements</h1>
              <CarrosselRecentes livros={data} />
            </div>
          </main>
        </div>
      </div>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
