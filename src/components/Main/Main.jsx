import { useContext } from 'react';
import MainSlider from '../MainSlider/MainSlider';
import './Main.css';
import Companies from '../Companies/Companies';
import Subscribe from '../Subscribe/Subscribe';
import ContentContext from '../../contexts/ContentContext';
import Shop from '../Shop/Shop';
import Catalog from '../Catalog/Catalog';
import ButtonUp from '../ButtonUp/ButtonUp';
import About from '../About/About';

const Main = ({ slides, onCardClick }) => {
  const content = useContext(ContentContext);
  const shopsWithCatalog = content.filter(item => item.catalog);

  return (
    <main className="content">
      <MainSlider slides={slides} />
      {shopsWithCatalog.length > 1
        && (<Companies shops={shopsWithCatalog} />)}
      <Subscribe />
      {shopsWithCatalog.map(({
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
          key={shopId}
        >
          <Catalog goods={goods} shopId={shopId} onCardClick={onCardClick} />
        </Shop>
      ))}
      <About />
      <ButtonUp />
    </main>
  );
};

export default Main;
