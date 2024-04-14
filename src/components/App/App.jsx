import { Routes, Route, Link } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import AccountPage from 'pages/AccountPage/AccountPage';
import CartPage from 'pages/CartPage/CartPage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import ProductPage from 'pages/ProductPage/ProductPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
    >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/account">Account</Link>
        <Link to="/cart"> Cart</Link>
        <Link to="/favorites"> Favorites</Link>
        <Link to="/register"> Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:productId" element={<ProductPage/>} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route />
      </Routes>
    </div>
  );
};
