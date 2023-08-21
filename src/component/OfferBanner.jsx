import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./OfferBanner.css";

const OfferBanner = ({ BannerAndFoodData, style, titleData }) => {
  const { imageSize, important } = style || {};

  const ImageStyle = {
    width: imageSize,
    important: important,
  };

  const check = ImageStyle.important;

  return (
    <>
      <div className="AllOffers">
        <div className="offer-title">
          <h2>{titleData}</h2>
        </div>
        <div className="offer-carousel">
          <Swiper loop={true} className="hero-swiper">
            {BannerAndFoodData.map((value, index) => (
              <SwiperSlide
                className={`${
                  check === true ? "swiper-slide newCustom" : "swiper-slide"
                }`}
                key={index}
              >
                <img src={value.img} alt="" style={ImageStyle} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OfferBanner;
