import './SliderPopup.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Navigation, Pagination } from 'swiper';
import Popup from '../Popup/Popup';

const SliderPopup = ({
  setControlledSwiper,
  onClose,
  isOpen,
  slides,
}) => (
  <Popup isOpen={isOpen} onClose={onClose}>
    <div className="slider-popup popup-content">
      <button
        className="slider-popup__close-btn popup-close-btn"
        type="button"
        aria-label="Закрыть всплывающее окно"
        onClick={onClose}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Pagination, Navigation, Keyboard]}
        pagination={{ clickable: true }}
        onSwiper={setControlledSwiper}
        className="slider-popup__slider"
        keyboard
        navigation
      >
        {slides.map(({ image_id: imageId, big }) => (
          <SwiperSlide key={imageId}>
            <img
              className="slider-popup__image"
              src={big}
              alt="фото магазина"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </Popup>
);

export default SliderPopup;
