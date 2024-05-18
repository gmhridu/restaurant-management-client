import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
 const reviewsData = async() => {
  const { data } = await axios(`${import.meta.env.VITE_API_URL}/reviews`);
  return data;
 }

 const {
  data: reviews = [],
 } = useQuery({
   queryKey: ["reviews"],
  queryFn: reviewsData,
  staleTime: 1000 * 60 * 60,
  cacheTime: 1000 * 60 * 60 * 24,
  refetchInterval: 1000 * 60 * 60 * 24,
  refetchIntervalInBackground: true,
 });
 return (
   <section className="container mx-auto my-12">
     <SectionTitle
       subHeading={"What Our Clients Say"}
       heading={"TESTIMONIALS"}
     />
     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       {reviews.map((review) => (
         <SwiperSlide key={review?._id}>
           <div className="mx-24 flex flex-col items-center justify-center space-y-2 my-12">
             <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
             <p className="text-lg font-normal text-center">
               {review?.details}
             </p>
             <h3 className="text-[#CD9003] font-medium text-xl text-center pt-2">
               {review?.name}
             </h3>
           </div>
         </SwiperSlide>
       ))}
     </Swiper>
   </section>
 );
};

export default Testimonials;