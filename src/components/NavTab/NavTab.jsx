import { HashLink } from 'react-router-hash-link';
import { useContext, useState } from 'react';
import NavLink from './NavLink/NavLink';
import './NavTab.css';
import ContentContext from '../../contexts/ContentContext';

const NavTab = ({ place }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const content = useContext(ContentContext);

  const handleOpenMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <nav
      className={`nav-tab__menu ${isMenuOpened ? 'nav-tab__menu_opened' : ''}`}
    >
      {place === 'header'
        && (
          <>
            <div className="nav-tab__fixed-logo-container">
              <HashLink
                className="nav-tab__fixed-logo"
                to="#top"
                smooth
              >
                Экипировка
              </HashLink>
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

      <ul className="nav-tab__menu-options">
        {content.map(item => (
          <NavLink
            slug={item.slug}
            title={item.title}
            key={item.shop_id}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavTab;
