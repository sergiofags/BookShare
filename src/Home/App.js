import './App.css';

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
                  <li className="links">Home</li>
                  <li className="links">Books</li>
                  <li className="links">What’s BookShare?</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="links">Register</li>
                  <li className="links-r">Sing In</li>
                </ul>
              </div>
            </div>

            <div className="banner">
              <div className='text-box'>
                <h1 className='title'>BookShare</h1>
                <h4 className='slogan'>Here you will explore all the worlds of literature.</h4>
              </div>
            </div>
          </header>
      </div>
      


        <main></main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
