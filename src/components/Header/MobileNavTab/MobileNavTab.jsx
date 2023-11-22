import { HashLink } from 'react-router-hash-link';

const MobileNavTab = ({ slug, title }) => (
  <li className="header__menu-option">
    <HashLink
      className="header__menu-link"
      to={`#${slug}`}
      smooth
    >
      {title}
    </HashLink>
  </li>
);

export default MobileNavTab;
