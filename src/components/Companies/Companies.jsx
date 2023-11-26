import { useContext } from 'react';
import ContentContext from '../../contexts/ContentContext';
import AnchorLink from '../AnchorLink/AnchorLink';
import './Companies.css';

const Companies = () => {
  const content = useContext(ContentContext);

  console.log(content);

  return (
    <section className="companies">
      <div className="companies__container">
        {content.map(({
          catalog, slug, shop_id: shopId, images, title,
        }) => {
          if (catalog) {
            return (
              <AnchorLink
                slug={slug}
                key={shopId}
              >
                <img
                  className="companies__item-img"
                  src={images[0]}
                  alt="Фото компании"
                />
                <h2 className="companies__item-title">{title}</h2>
              </AnchorLink>
            );
          }
          return false;
        })}
      </div>

    </section>
  );
};

export default Companies;
