import { NavLink, Outlet } from 'react-router-dom';

import { navLinkStyleFn } from '../utils/linkStyle';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <NavLink to="/home/upload/images" style={navLinkStyleFn}>
          images
        </NavLink>
        {' | '}
        <NavLink to="/home/upload/sheets" style={navLinkStyleFn}>
          sheets
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}
