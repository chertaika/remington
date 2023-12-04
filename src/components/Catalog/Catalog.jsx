import './Catalog.css';
import Card from '../Card/Card';

const Catalog = ({
  goods,
  shopId,
  onAskButtonClick,
}) => (
  <article className="catalog">
    <h2 className="catalog__title">Каталог</h2>
    <div className="catalog__card-container">
      {goods.map(({
        title,
        image,
        price,
        good_id: goodId,
      }) => (
        <Card
          key={goodId}
          title={title}
          price={price}
          image={image}
          goodId={goodId}
          shopId={shopId}
          onAskButtonClick={onAskButtonClick}
        />
      ))}
    </div>
  </article>
);

export default Catalog;
