"use client";
import React from "react";
import bannar1 from "./../../../../public/screens/slider/grocery-banner.png";
import bannar2 from "./../../../../public/screens/slider/grocery-banner-2.jpeg";

import slide1 from "./../../../../public/screens/slider/slider-image-1.jpeg";
import slide2 from "./../../../../public/screens/slider/slider-image-2.jpeg";
import slide3 from "./../../../../public/screens/slider/slider-image-3.jpeg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const MainSlider = () => {
  return (
    <div className="mb-10 flex">
      <div className="w-full md:w-2/3">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Image className="h-[400px] object-cover" src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="h-[400px] object-cover" src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="h-[400px] object-cover" src={slide3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full md:w-1/3">
        <Image className="h-[200px] object-cover" src={bannar1} alt="" />
        <Image className="h-[200px] object-cover" src={bannar2} alt="" />
      </div>
    </div>
  );
};

export default MainSlider;
