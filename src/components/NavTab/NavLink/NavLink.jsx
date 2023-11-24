import { HashLink } from 'react-router-hash-link';

const NavLink = ({
  slug,
  title,
  place = '',
  onClick,
}) => {
  const scroll = (el) => {
    const yOffset = 51;
    const y = el.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <li
      className={`nav-tab__menu-option ${place === 'header' && 'nav-tab__menu-option_type_header'}`}
    >
      <HashLink
        className={`nav-tab__menu-link link-hover ${place === 'footer' && 'nav-tab__menu-link_type_footer'}`}
        to={`#${slug}`}
        scroll={scroll}
        onClick={onClick}
      >
        {title}
      </HashLink>
    </li>
  );
};

export default NavLink;
