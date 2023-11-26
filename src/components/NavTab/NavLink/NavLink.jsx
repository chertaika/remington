import AnchorLink from '../../AnchorLink/AnchorLink';

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
      onClick={onClick}
    >
      <AnchorLink
        slug={slug}
        place={place}
        scroll={scroll}
      >
        {title}
      </AnchorLink>
    </li>
  );
};

export default NavLink;
