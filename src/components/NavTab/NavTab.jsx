import { HashLink } from 'react-router-hash-link';
import { useContext, useState } from 'react';
import NavLink from './NavLink/NavLink';
import './NavTab.css';
import ContentContext from '../../contexts/ContentContext';

const NavTab = ({ place, isHeaderMin = false }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const content = useContext(ContentContext);

  const handleOpenMenu = () => {
    const currentWidth = window.innerWidth;
    if (currentWidth < 768) {
      setIsMenuOpened(!isMenuOpened);
    }
  };

  return (
    <nav
      className={`nav-tab__menu ${place === 'header' ? 'nav-tab__menu_type_header' : ''} ${isMenuOpened && place === 'header' ? 'nav-tab__menu_opened' : ''}`}
    >
      {place === 'header'
        && (
          <>
            <div className="nav-tab__fixed-logo-container">
              {isHeaderMin
                && (
                <HashLink
                  className="nav-tab__fixed-logo"
                  to="#top"
                  smooth
                >
                  Экипировка
                </HashLink>
                )}
            </div>
            <div className="nav-tab__mobile-content">
              <div
                className="nav-tab__burger-container"
                onClick={handleOpenMenu}
              >
                <div className="nav-tab__burger">
                  <div className="nav-tab__bar nav-tab__bar-top" />
                  <div className="nav-tab__bar nav-tab__bar-middle" />
                  <div className="nav-tab__bar nav-tab__bar_top" />
                </div>
              </div>
              <h1 className="nav-tab__mobile-title">Экипировка</h1>
            </div>
          </>
        )}

      <ul className={`nav-tab__menu-options ${place === 'footer' ? 'nav-tab__menu-options_type_footer' : ''}`}>
        {content.map(item => (
          <NavLink
            slug={item.slug}
            title={item.title}
            place={place}
            key={item.shop_id}
            onClick={handleOpenMenu}
          />
        ))}
        <NavLink
          slug="#promo"
          title="Акции"
          place={place}
          onClick={handleOpenMenu}
        />
        <NavLink
          slug="#about"
          title="О компании"
          place={place}
          onClick={handleOpenMenu}
        />
      </ul>
    </nav>
  );
};

export default NavTab;
