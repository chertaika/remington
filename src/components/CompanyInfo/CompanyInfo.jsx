import './CompanyInfo.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Pagination } from 'swiper';

const CompanyInfo = ({
  title,
  address,
  images,
  onImageClick,
  controlledSwiper,
}) => (
  <div className="about__company">
    <div className="about__company-desc">
      <h3 className="about__company-title">{title}</h3>
      <p className="about__company-subtitle">
        {address}
      </p>
    </div>
    <Swiper
      modules={[Pagination, Controller]}
      pagination={{ clickable: true }}
      slidesPerView="auto"
      spaceBetween={10}
      className="about__slider"
      breakpoints={{
        768: {
          spaceBetween: '7%',
          slidesPerView: 3,
        },
      }}
    >
      {images.map(({ image_id: imageId, small }, index) => (
        <SwiperSlide
          key={imageId}
          className="about__slide"
          onClick={() => {
            onImageClick(images);
            controlledSwiper.slideTo(index, 0);
          }}
        >
          <img
            className="about__img thumb"
            src={small}
            alt="фото магазина"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
export default CompanyInfo;
