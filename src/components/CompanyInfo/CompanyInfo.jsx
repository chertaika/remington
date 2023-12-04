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
  <article className="company-info">
    <div className="company-info__desc">
      <h3 className="company-info__title">{title}</h3>
      <p className="company-info__subtitle">
        {address}
      </p>
    </div>
    <Swiper
      modules={[Pagination, Controller]}
      pagination={{ clickable: true }}
      slidesPerView="auto"
      spaceBetween={10}
      className="company-info__slider"
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
          className="company-info__slide"
          onClick={() => {
            onImageClick(images);
            controlledSwiper.slideTo(index, 0);
          }}
        >
          <img
            className="company-info__img thumb"
            src={small}
            alt="фото магазина"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </article>
);
export default CompanyInfo;
