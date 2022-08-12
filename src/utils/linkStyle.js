const activeStyle = {
  color: 'blue',
};

export const navLinkStyleFn = ({ isActive }) =>
  isActive ? activeStyle : undefined;
