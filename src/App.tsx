import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import './App.css';
import ShopPage from 'pages/ShopPage';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: 'shop', element: <ShopPage /> },
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
