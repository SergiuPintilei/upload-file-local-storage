import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Images, NotFound, Sheets } from '../pages';

import ImageUpload from './ImageUpload';
import SheetUpload from './SheetUpload';

export default function AppRoutes() {
  return (
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
  );
}
