import '../../Home/App.css';

function Header() {
  return (
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
            <li className="links"><a href="#">What’s BookShare?</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="links"><a href="#">Register</a></li>
            <li className="links-r"><a href="#">Sing In</a></li>
          </ul>
        </div>
      </div>
  );
}

export default Header;

