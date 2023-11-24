import { Link } from 'react-router-dom';
import { useState } from 'react';
import headerLogo from '../../assets/images/logo-header.svg';
import './Header.css';
import NavTab from '../NavTab/NavTab';

const Header = () => {
  const [isHeaderMin, setIsHeaderMin] = useState(false);

  document.addEventListener('scroll', () => {
    if (window.scrollY >= 64) {
      setIsHeaderMin(true);
    } else {
      setIsHeaderMin(false);
    }
  });

  return (
    <header className="header">
      {!isHeaderMin
        && (
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
        )}
      <NavTab place="header" isHeaderMin={isHeaderMin} />
    </header>
  );
};

export default Header;
