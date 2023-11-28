import './Card.css';

const Card = ({
  title,
  image,
  price,
  goodId,
  onCardClick,
}) => {
  const handleClick = () => {
    onCardClick(goodId);
  };

  return (
    <div className="card">
      <div
        className="card__desc"
        onClick={handleClick}
      >
        <img
          className="card__img"
          src={image[0]}
          alt={title}
        />
        <h3 className="card__title">
          {title}
        </h3>
      </div>
      <div className="card__order">
        <div className="card__price">{`${price}P`}</div>
        <button
          className="card__ask-btn button-hover"
          type="button"
          aria-label="Кнопка Спросить"
        >
          <span className="card__btn-text" />
        </button>
      </div>
    </div>
  );
};

export default Card;
