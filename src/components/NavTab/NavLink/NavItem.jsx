import AnchorLink from '../../AnchorLink/AnchorLink';

const NavItem = ({
  slug,
  title,
  place = '',
  onClick,
}) => (
  <li
    className={`nav-tab__menu-option ${place === 'header' && 'nav-tab__menu-option_type_header'}`}
    onClick={onClick}
  >
    <AnchorLink
      slug={slug}
      place={place}
    >
      {title}
    </AnchorLink>
  </li>
);

export default NavItem;
