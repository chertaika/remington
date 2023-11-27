import { useContext } from 'react';
import MainSlider from '../MainSlider/MainSlider';
import './Main.css';
import Companies from '../Companies/Companies';
import Subscribe from '../Subscribe/Subscribe';
import ContentContext from '../../contexts/ContentContext';
import Shop from '../Shop/Shop';

const Main = ({ slides }) => {
  const content = useContext(ContentContext);

  return (
    <main className="content">
      <MainSlider slides={slides} />
      {content.filter(item => item.catalog).length > 1
        && (<Companies />)}
      <Subscribe />
      {content.map(({
        catalog,
        description,
        vk_link: vkLink,
        slug,
        title,
        shop_id: shopId,
      }) => {
        if (catalog) {
          return (
            <Shop
              slug={slug}
              title={title}
              description={description}
              vkLink={vkLink}
              catalog={catalog}
              key={shopId}
            />
          );
        }
        return false;
      })}
    </main>
  );
};

export default Main;
