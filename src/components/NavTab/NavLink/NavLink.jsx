import { HashLink } from 'react-router-hash-link';

const NavLink = ({ slug, title }) => (
  <li className="nav-tab__menu-option">
    <HashLink
      className="nav-tab__menu-link link-hover"
      to={`#${slug}`}
      smooth
    >
      {title}
    </HashLink>
  </li>
);

export default NavLink;
