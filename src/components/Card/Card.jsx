import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({
  title,
  image,
  price,
  goodId,
  onAskButtonClick,
}) => {
  const handleQuestionClick = () => {
    onAskButtonClick(title);
  };

  return (
    <div className="card">
      <Link
        className="card__desc"
        to={`/good/${goodId}`}
      >
        <img
          className="card__img"
          src={image[0]}
          alt={title}
        />
        <h3 className="card__title">
          {title}
        </h3>
      </Link>
      <div className="card__order">
        <div className="card__price">{`${price}P`}</div>
        <button
          className="card__ask-btn button-hover"
          type="button"
          onClick={handleQuestionClick}
          aria-label="Кнопка Спросить"
        >
          <span className="card__btn-text" />
        </button>
      </div>
    </div>
  );
};

export default Card;
