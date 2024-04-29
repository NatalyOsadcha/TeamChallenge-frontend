import { Outlet, Link } from 'react-router-dom';
// import logo from './../../../public/logo512.png'

export default function SharedLayout() {
  return (
    <div style={{ maxWidth: 1184, margin: '0 auto' }}>
      <header>
        {/* <a href="Home">
          <img src="" alt="logo" />
          <p>Green Grace</p>
        </a> */}
              <p>Green Grace</p>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/account">Account</Link>
          <Link to="/cart"> Cart</Link>
          <Link to="/favorites"> Favorites</Link>
          <Link to="/register"> Register</Link>
        </nav>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
