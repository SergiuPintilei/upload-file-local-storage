import { BrowserRouter } from 'react-router-dom';

import { AppRoutes, Footer, Header } from './components';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
