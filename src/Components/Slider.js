// Import Swiper React components
import React from "react";
import "./style.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="slider">
        <div className="slider-item">
          <img src={require("./Images/temple-construction.jpg")} alt=".." />
          <button className="btn btn-danger">Temple Construction</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item">
          <img src={require("./Images/ASundayLoveF.jpg")} alt="..." />
          <button className="btn btn-danger">Sunday Love Feast</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item">
          <img src={require("./Images/diety dressing.jpg")} alt="..." />
          <button className="btn btn-danger">Deity Dressing</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item">
          <img src={require("./Images/festivals.jpg")} alt="..." />
          <button className="btn btn-danger">Festivals</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-item">
          <img src={require("./Images/food-for-life.jpeg")} alt="..." />
          <button className="btn btn-danger">Food For Life</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
