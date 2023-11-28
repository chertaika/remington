import AnchorLink from '../AnchorLink/AnchorLink';
import './Companies.css';

const Companies = ({ shops }) => (
  <section className="companies">
    <div className="companies__container">
      {shops.map(({
        slug,
        shop_id: shopId,
        images,
        title,
      }) => (
        <AnchorLink
          slug={slug}
          key={shopId}
        >
          <img
            className="companies__item-img"
            src={images[0].small}
            alt={`Фото компании ${title}`}
          />
          <h2 className="companies__item-title">{title}</h2>
        </AnchorLink>
      ))}
    </div>

  </section>
);

export default Companies;
