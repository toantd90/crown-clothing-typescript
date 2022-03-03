import { Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='shop/hats' element={<HatsPage />} />
        <Route path='shop/jackets' element={<JacketsPage />} />
        <Route path='shop/sneakers' element={<SneakersPage />} />
        <Route path='shop/mens' element={<MenPage />} />
        <Route path='shop/womens' element={<WomenPage />} />
      </Routes>
    </div>
  );
}

export default App;
