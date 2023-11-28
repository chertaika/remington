import './Product.css';
import { useEffect } from 'react';

const Product = ({
  currentGood: {
    title,
    description,
    price,
    image,
  },
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="product">
      <div className="product__photo">
        <img className="product__image" alt="фото товара" src={image} />
      </div>
      <h2 className="product__title">
        {title}
      </h2>
      <div className="product__order">
        <div className="product__price">{`${price}P`}</div>
        <button
          className="product__ask-btn button-hover"
          type="button"
          aria-label="Кнопка Спросить"
        >
          <span className="product__btn-text" />
        </button>
      </div>
      <p className="product__desc">
        {description}
      </p>
    </main>
  );
};

export default Product;
