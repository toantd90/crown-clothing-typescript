import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ShopPage from 'pages/ShopPage';

import { Header } from 'components';

import './App.css';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: 'shop', element: <ShopPage /> },
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
