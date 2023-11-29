import './SliderPopup.css';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect } from 'react';
import {
  EffectFade, Keyboard,
  Navigation,
  Pagination,
  Thumbs,
// eslint-disable-next-line import/no-unresolved
} from 'swiper/modules';

const SliderPopup = ({
  thumbs,
  onClose,
  isOpen,
  slides,
}) => {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen]);

  return (
    <div className={`slider-popup ${isOpen ? 'slider-popup_opened' : ''}`} onMouseDown={handleOverlayClick}>
      <div className="slider-popup__content">
        <button
          className="slider-popup__close-btn btn-hover"
          type="button"
          aria-label="Закрыть всплывающее окно"
          onClick={onClose}
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          effect="fade"
          modules={[Pagination, Navigation, Thumbs, EffectFade, Keyboard]}
          thumbs={{ thumbs }}
          pagination={{ clickable: true }}
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
    </div>
  );
};

export default SliderPopup;
