import { useContext } from 'react';
import MainSlider from '../MainSlider/MainSlider';
import './Main.css';
import Companies from '../Companies/Companies';
import Subscribe from '../Subscribe/Subscribe';
import ContentContext from '../../contexts/ContentContext';
import Shop from '../Shop/Shop';

const Main = ({ slides }) => {
  const content = useContext(ContentContext);
  const shopsWithCatalog = content.filter(item => item.catalog);

  return (
    <main className="content">
      <MainSlider slides={slides} />
      {shopsWithCatalog.length > 1
        && (<Companies shops={shopsWithCatalog} />)}
      <Subscribe />
      {shopsWithCatalog.map(({
        catalog,
        description,
        vk_link: vkLink,
        slug,
        title,
        shop_id: shopId,
        goods,
      }) => (
        <Shop
          slug={slug}
          title={title}
          description={description}
          vkLink={vkLink}
          catalog={catalog}
          goods={goods}
          key={shopId}
        />
      ))}
    </main>
  );
};

export default Main;
