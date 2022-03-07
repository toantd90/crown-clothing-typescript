import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HAT PAGES</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGES</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>SNEAKER PAGES</h1>
  </div>
);

const MenPage = () => (
  <div>
    <h1>MEN PAGES</h1>
  </div>
);

const WomenPage = () => (
  <div>
    <h1>WOMEN PAGES</h1>
  </div>
);

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: 'shop/hats', element: <HatsPage /> },
    { path: 'shop/jackets', element: <JacketsPage /> },
    { path: 'shop/sneakers', element: <SneakersPage /> },
    { path: 'shop/mens', element: <MenPage /> },
    { path: 'shop/womens', element: <WomenPage /> },
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
