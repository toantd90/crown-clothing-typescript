import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ShopPage from 'pages/ShopPage';
import Authentication from 'pages/Authentication';
import Checkout from 'pages/Checkout';

import { Header } from 'components';

import './App.scss';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: 'shop', element: <ShopPage /> },
    { path: 'auth', element: <Authentication /> },
    { path: 'checkout', element: <Checkout /> },
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <div>
      <Router>
        <Header />
        <App />
      </Router>
    </div>
  );
};

export default AppWrapper;
