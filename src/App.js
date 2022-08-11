import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

import Images from './pages/Images';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Sheets from './pages/Sheets';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/images">Images</Link>
            </li>
            <li>
              <Link to="/sheets">Sheets</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route exact replace path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/images" element={<Images />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>&copy; File Upload Code Challenge</footer>
    </BrowserRouter>
  );
}

export default App;
