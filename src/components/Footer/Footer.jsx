import footerLogo from '../../assets/images/logo-footer.svg';
import NavTab from '../NavTab/NavTab';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <img className="footer__logo" src={footerLogo} alt="логотип" />
      <NavTab place="footer" />
      <div className="footer__info">
        <h2 className="footer__title">ЦЕНТР ПРОФЕССИОНАЛЬНОЙ ЭКИПИРОВКИ</h2>
        <a className="footer__phone-number" href="tel:+79234208969">+7 923 420 8969</a>
      </div>
    </div>
  </footer>
);

export default Footer;
