import { NavLink } from 'react-router-dom';

import { navLinkStyleFn } from '../utils/linkStyle';

import './Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo-icon">
            <NavLink to="/home/upload/images">&#x2302;</NavLink>
          </li>
          <li className="u-ml-auto">
            <NavLink to="/images" style={navLinkStyleFn}>
              Images
            </NavLink>
          </li>
          <li>
            <NavLink to="/sheets" style={navLinkStyleFn}>
              Sheets
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
