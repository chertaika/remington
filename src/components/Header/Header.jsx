import { Link } from 'react-router-dom';
import headerLogo from '../../assets/images/logo-header.svg';
import './Header.css';
import NavTab from '../NavTab/NavTab';

const Header = ({ content }) => (
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
    <NavTab content={content} place="header" />
  </header>
);

export default Header;
