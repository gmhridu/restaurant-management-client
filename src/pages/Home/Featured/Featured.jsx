import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
 return (
   <div className="featured-item text-white bg-fixed my-12">
     <div className="bg-[#151515B2]">
       <div className="text-white py-4">
         <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
       </div>
       <div className="flex justify-center items-center py-16 md:px-36 md:gap-x-6">
         <div className="">
           <img
             src={featuredImg}
             alt="featured"
             className="md:w-full rounded-md"
           />
         </div>
         <div className="md:space-y-4 md:w-full w-2/6">
           <h3 className="md:text-xl font-normal">March 20, 2023</h3>
           <h3 className="md:text-2xl font-normal uppercase">
             WHERE CAN I GET SOME?
           </h3>
           <p className="md:text-xl font-normal">
             Continually drive premier communities via next-generation
             imperatives. Professionally enable installed base data without
             robust supply chains. Seamlessly network proactive catalysts.
           </p>
           <button className="btn btn-outline border-0 border-b  hover:bg-black hover:text-white hover:border-0">
             Read More
           </button>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Featured;