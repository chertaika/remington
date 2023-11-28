import { HashLink } from 'react-router-hash-link';
import { useContext, useState } from 'react';
import NavLink from './NavLink/NavLink';
import './NavTab.css';
import ContentContext from '../../contexts/ContentContext';

const NavTab = ({ place, isHeaderMin = false }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const shopsWithCatalog = useContext(ContentContext).filter(item => item.catalog);

  const handleOpenMenu = () => {
    const currentWidth = window.innerWidth;
    if (currentWidth < 768) {
      setIsMenuOpened(!isMenuOpened);
    }
  };

  return (
    <nav
      className={`nav-tab ${place === 'header' ? 'nav-tab_type_header' : ''} ${isMenuOpened && place === 'header' ? 'nav-tab_opened' : ''}`}
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
        {shopsWithCatalog.map(({
          slug,
          title,
          shop_id: shopId,
        }) => (
          <NavLink
            slug={slug}
            title={title}
            place={place}
            key={shopId}
            onClick={handleOpenMenu}
          />
        ))}
        <NavLink
          slug="promotions"
          title="Акции"
          place={place}
          onClick={handleOpenMenu}
        />
        <NavLink
          slug="about"
          title="О компании"
          place={place}
          onClick={handleOpenMenu}
        />
      </ul>
    </nav>
  );
};

export default NavTab;
