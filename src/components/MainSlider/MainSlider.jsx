// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import React from 'react';
import './MainSlider.css';

const MainSlider = ({ slides }) => (
  <section className="main-swiper">
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      loop
      speed={1000}
      keyboard
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 8000,
        disableOnInteraction: true,
      }}
      slidesPerView={1}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.slide_id}>
          <img className="main-swiper__img" src={slide.image} alt="название слайдера" />
          <div className="main-swiper__info">
            {slide.description.length > 0
              && (
                <p className="main-swiper__text">
                  {slide.description}
                </p>
              )}
            {slide.link.length > 0
              && (
                <Link className="main-swiper__link button-hover" to={slide.link}>{slide.button_text}</Link>
              )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default MainSlider;
