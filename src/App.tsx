import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ShopPage from 'pages/ShopPage';
import Authentication from 'pages/Authentication';

import { Header } from 'components';

import './App.scss';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: 'shop', element: <ShopPage /> },
    { path: 'auth', element: <Authentication /> },
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
