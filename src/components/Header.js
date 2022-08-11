import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'blue',
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li style={{ fontSize: 30 }}>
            <NavLink to="/home/upload/images">&#x2302;</NavLink>
          </li>
          <li style={{ marginLeft: 'auto' }}>
            <NavLink
              to="/images"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Images
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sheets"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sheets
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
