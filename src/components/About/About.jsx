import './About.css';
import React, { useContext, useState } from 'react';
import ContentContext from '../../contexts/ContentContext';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import SliderPopup from '../SliderPopup/SliderPopup';
import FeedbackPopup from '../FeedbackPopup/FeedbackPopup';

const About = ({ questionTitle }) => {
  const shops = useContext(ContentContext);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [isSliderPopupOpen, setIsSliderPopupOpen] = useState(false);
  const [currentSlides, setCurrentSlides] = useState([]);

  const handleCompanyImageClick = (images) => {
    setIsSliderPopupOpen(true);
    setCurrentSlides(images);
  };

  const closeSliderPopup = () => {
    setIsSliderPopupOpen(false);
  };

  const getControlledSlider = (data) => {
    setControlledSwiper(data);
  };

  return (
    <>
      <section className="about" id="about">
        <div className="about__heading">
          <h2 className="about__title">Контакты</h2>
          <div className="about__line line" />
        </div>
        <div className="about__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Adbed70d9a23376240c7a179911da5dc7b02732fe898301e1dc56171999a3b9bb&amp;source=constructor"
            title="Карта"
            className="about__frame"
          />
        </div>
        <div className="about__info">
          {shops.map(({
            title,
            address,
            images,
            shop_id: shopId,
          }) => (
            <CompanyInfo
              title={title}
              address={address}
              images={images}
              key={shopId}
              onImageClick={handleCompanyImageClick}
              controlledSwiper={controlledSwiper}
            />
          ))}
        </div>
      </section>
      <FeedbackPopup questionTitle={questionTitle} />
      <SliderPopup
        setControlledSwiper={getControlledSlider}
        isOpen={isSliderPopupOpen}
        onClose={closeSliderPopup}
        slides={currentSlides}
      />
    </>
  );
};

export default About;
