import { HashLink } from 'react-router-hash-link';

const NavLink = ({ slug, title, place = '' }) => (
  <li className={`nav-tab__menu-option ${place === 'header' && 'nav-tab__menu-option_type_header'}`}>
    <HashLink
      className={`nav-tab__menu-link link-hover ${place === 'footer' && 'nav-tab__menu-link_type_footer'}`}
      to={`#${slug}`}
      smooth
    >
      {title}
    </HashLink>
  </li>
);

export default NavLink;
