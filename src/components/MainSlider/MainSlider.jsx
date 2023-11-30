import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import React from 'react';
import './MainSlider.css';
import { Autoplay, Navigation, Pagination } from 'swiper';

const MainSlider = ({ slides }) => (
  <section className="main-swiper">
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      loop
      speed={1000}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 8000,
        disableOnInteraction: true,
      }}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.slide_id}>
          <img
            className="main-swiper__img"
            src={slide.image}
            alt="Cлайд"
          />
          <div className="main-swiper__info">
            {slide.description
                && (
                  <p className="main-swiper__text">
                    {slide.description}
                  </p>
                )}
            {slide.button_link
                && (
                  <Link
                    className="main-swiper__link button-hover"
                    to={slide.button_link}
                  >
                    {slide.button_title}
                  </Link>
                )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default MainSlider;
