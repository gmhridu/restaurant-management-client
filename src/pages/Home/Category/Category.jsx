import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="container mx-auto lg:px-20">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-5 cursor-pointer"
      >
        <SwiperSlide>
          <img src={slide1} className="rounded-xl" />
          <h3 className="font-cinzel text-xl font-normal text-center uppercase -mt-12 text-white pr-4 pb-6">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} className="rounded-xl" />
          <h3 className="font-cinzel text-xl font-normal text-center uppercase -mt-12 text-white pr-4 pb-6">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} className="rounded-xl" />
          <h3 className="font-cinzel text-xl font-normal text-center uppercase -mt-12 text-white pr-4 pb-6">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} className="rounded-xl" />
          <h3 className="font-cinzel text-xl font-normal text-center uppercase -mt-16 text-white pr-4 pb-6">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} className="rounded-xl" />
          <h3 className="font-cinzel text-xl font-normal text-center uppercase -mt-12 text-white pr-4 pb-6">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
