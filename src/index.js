import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './context/cart.context';
import { CategoriesProvider } from './context/categories.context';
import { UserProvider } from './context/user.context';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter >
  </React.StrictMode >,
  document.getElementById('root')
);
