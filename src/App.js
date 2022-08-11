import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Images from './pages/Images';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Sheets from './pages/Sheets';

import Header from './components/Header';
import Footer from './components/Footer';
import ImageUpload from './components/ImageUpload';
import SheetUpload from './components/SheetUpload';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route
            exact
            replace
            path="/"
            element={<Navigate to="/home/upload/images" />}
          />
          <Route path="/home" element={<Home />}>
            <Route path="upload/images" element={<ImageUpload />} />
            <Route path="upload/sheets" element={<SheetUpload />} />
          </Route>
          <Route path="/images" element={<Images />} />
          <Route path="/sheets" element={<Sheets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
