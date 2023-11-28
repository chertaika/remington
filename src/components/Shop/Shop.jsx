import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = ({
  title,
  description,
  vkLink,
  slug,
  children,
}) => (
  <section className="shop" id={slug}>
    <div className="shop__description">
      <h2 className="shop__title">{title}</h2>
      <div className="shop__main-text">
        <div className="shop__line line" />
        <p className="shop__paragraph">
          {description}
        </p>
        {vkLink && (
          <Link className="shop__social-link button-hover" to={vkLink} target="_blank">
            <span className="shop__link-text" />
            <span className="shop__social-icon social-icon" />
          </Link>
        )}
      </div>
    </div>
    {children}
  </section>
);

export default Shop;
