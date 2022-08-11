import { NavLink, Outlet } from 'react-router-dom';

const activeStyle = {
  color: 'blue',
};

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <NavLink
          to="/home/upload/images"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          images
        </NavLink>
        {' | '}
        <NavLink
          to="/home/upload/sheets"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          sheets
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}
