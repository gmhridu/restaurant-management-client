import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'

const Banner = () => {
 return (
   <Carousel
     autoPlay
     autoFocus
     interval={3000}
     infiniteLoop
     showStatus={false}
   >
     <div className="md:h-96 lg:h-[450px] xl:h-[550px] bg-contain">
       <img src={img1} className="h-full w-full" />
     </div>
     <div className="md:h-96 lg:h-[450px] xl:h-[550px] bg-contain">
       <img src={img2} className="h-full w-full" />
     </div>
     <div className="md:h-96 lg:h-[450px] xl:h-[550px] bg-contain">
       <img src={img3} className="h-full w-full" />
     </div>
     <div className="md:h-96 lg:h-[450px] xl:h-[550px] bg-contain">
       <img src={img4} className="h-full w-full" />
     </div>
     <div className="md:h-96 lg:h-[450px] xl:h-[550px] bg-contain">
       <img src={img5} className="h-full w-full" />
     </div>
     <div className="md:h-96 lg:h-[450px] xl:h-[550px] bg-contain">
       <img src={img6} className="h-full w-full" />
     </div>
   </Carousel>
 );
};

export default Banner;