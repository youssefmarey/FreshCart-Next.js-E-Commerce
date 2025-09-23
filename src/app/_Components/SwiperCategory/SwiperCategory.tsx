"use client" 
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Image from 'next/image';
import { category } from '@/types/category.type';

const SwiperCategory = ({categories}: {categories: category}) => {
  return (
    <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={5}
          autoplay={{
            delay: 1000, 
            disableOnInteraction: false, 
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {categories.map((category: category , idx: number) => <SwiperSlide key={idx} >
            <Image width={500} height={500} src={category.image} className='h-[200px] object-cover w-full' alt={category.name} />
            <p className='my-3 text-center'> {category.name} </p>
          </SwiperSlide> )}
          
        </Swiper>
    </div>
  )
}

export default SwiperCategory