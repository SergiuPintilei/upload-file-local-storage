import { NavLink, Outlet } from 'react-router-dom';

import { navLinkStyleFn } from '../utils/linkStyle';

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <nav>
        <NavLink to="/home/upload/images" style={navLinkStyleFn}>
          images
        </NavLink>
        {' | '}
        <NavLink to="/home/upload/sheets" style={navLinkStyleFn}>
          sheets
        </NavLink>
      </nav>

      <Outlet />
    </section>
  );
}
