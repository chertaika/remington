import { useContext, useState } from 'react';
import MainSlider from '../MainSlider/MainSlider';
import './Main.css';
import Companies from '../Companies/Companies';
import Subscribe from '../Subscribe/Subscribe';
import ContentContext from '../../contexts/ContentContext';
import Shop from '../Shop/Shop';
import Catalog from '../Catalog/Catalog';
import ButtonUp from '../ButtonUp/ButtonUp';
import About from '../About/About';
import SliderPopup from '../SliderPopup/SliderPopup';

const Main = ({ slides, onCardClick }) => {
  const content = useContext(ContentContext);
  const [thumbs, setThumbs] = useState(null);
  const [isSliderPopupOpen, setIsSliderPopupOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState([]);
  const shopsWithCatalog = content.filter(item => item.catalog);

  const handleCompanyImageClick = (images) => {
    setIsSliderPopupOpen(true);
    setCurrentSlides(images);
  };

  const closeAllPopups = () => {
    setIsSliderPopupOpen(false);
    setThumbs(null);
  };

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
      <About onOpenPopup={handleCompanyImageClick} setThumbs={setThumbs} />
      <SliderPopup
        thumbs={thumbs}
        isOpen={isSliderPopupOpen}
        onClose={closeAllPopups}
        slides={currentSlides}
      />
      <ButtonUp />
    </main>
  );
};

export default Main;
