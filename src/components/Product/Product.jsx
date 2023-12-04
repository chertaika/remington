import './Product.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = ({
  getCurrentProduct,
  onAskButtonClick,
  currentGood: {
    title,
    description,
    price,
    image,
  },
}) => {
  const { id } = useParams();
  const handleQuestionClick = () => {
    onAskButtonClick(title);
  };

  useEffect(() => {
    getCurrentProduct(id);
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
          onClick={handleQuestionClick}
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
