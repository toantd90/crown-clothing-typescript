import React from 'react';
import ReactDOM from 'react-dom';

import { UserProvider } from 'contexts/users';
import { ProductsProvider } from 'contexts/products';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
