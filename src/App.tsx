import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import ShopPage from 'pages/ShopPage';
import SignIn from 'pages/SignIn';

import { Header } from 'components';

import './App.scss';

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: 'shop', element: <ShopPage /> },
    { path: 'sign-in', element: <SignIn /> },
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
