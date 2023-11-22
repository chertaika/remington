import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import headerLogo from '../../assets/images/logo-header.svg';
import './Header.css';
import MobileNavTab from './MobileNavTab/MobileNavTab';
import NavTab from './NavTab/NavTab';

const Header = ({ content }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  console.log(content);

  const handleOpenMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header className="header">
      <div className="header__company-info">
        <img className="header__logo" src={headerLogo} alt="логотип" />
        <h1 className="header__title">Центр профессиональной экипировки</h1>
        <Link
          className="header__social-link button-hover"
          to="https://vk.com/remington7_62_tomsk"
          target="_blank"
        >
          <div className="header__social-icon" />
        </Link>
      </div>
      <nav className="header__menu header__menu_desktop">
        <div className="header__fixed-logo-container">
          <HashLink
            className="header__fixed-logo"
            to="#top"
            smooth
          >
            Экипировка
          </HashLink>
        </div>
        <ul className="header__links">
          {content.map(item => (
            <NavTab
              slug={item.slug}
              title={item.title}
              key={item.shop_id}
            />
          ))}
        </ul>
      </nav>
      <nav className={`header__menu header__menu_mobile ${isMenuOpened ? 'header__menu_opened' : ''}`}>
        <div className="header__main-content">
          <div className="header__burger-container" onClick={handleOpenMenu}>
            <div className="header__burger">
              <div className="header__bar header__bar-top" />
              <div className="header__bar header__bar-middle" />
              <div className="header__bar header__bar_top" />
            </div>
          </div>
          <h1 className="header__mobile-title">Экипировка</h1>
        </div>
        <ul className="header__menu-options">
          {content.map(item => (
            <MobileNavTab
              slug={item.slug}
              title={item.title}
              key={item.shop_id}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
