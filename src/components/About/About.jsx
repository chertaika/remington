import './About.css';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useContext } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Pagination } from 'swiper/modules';
import ContentContext from '../../contexts/ContentContext';

const About = ({ onOpenPopup, setThumbs }) => {
  const content = useContext(ContentContext);

  const handleClick = () => {
    onOpenPopup(content[0]?.images);
  };

  return (
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
        <div className="about__company">
          <div className="about__company-desc">
            <h3 className="about__company-title">{content[0]?.title}</h3>
            <p className="about__company-subtitle">
              {content[0]?.address}
            </p>
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            slidesPerView="auto"
            spaceBetween={10}
            className="about__slider"
            onClick={setThumbs}
            breakpoints={{
              768: {
                spaceBetween: '7%',
                slidesPerView: 3,
              },
            }}
          >
            {content[0]?.images.map(({ image_id: imageId, small }) => (
              <SwiperSlide key={imageId} className="about__slide" onClick={handleClick}>
                <img
                  className="about__img thumb"
                  src={small}
                  alt="фото магазина"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
