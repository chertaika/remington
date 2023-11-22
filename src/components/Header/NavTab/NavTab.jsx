import { HashLink } from 'react-router-hash-link';

const NavTab = ({ slug, title }) => (
  <li>
    <HashLink
      className="header__link link-hover"
      to={`#${slug}`}
      smooth
    >
      {title}
    </HashLink>
  </li>
);

export default NavTab;
