import React from 'react';
import { Parallax } from 'react-parallax';
import bgImg from '../../../assets/home/chef-service.jpg'

const Intro = () => {
 return (
   <div className="container mx-auto my-12">
     <Parallax
       blur={{ min: -50, max: 50 }}
       bgImage={bgImg}
       bgImageAlt="the menu"
    strength={-200}
     >
       <div className="hero md:h-96 lg:h-[450px] xl:h-[550px] bg-cover bg-no-repeat">
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content bg-white py-16 px-28 rounded-xl">
           <div className="max-w-md text-black">
             <h1 className="mb-5 text-5xl font-bold uppercase">Bistro Boss</h1>
             <p className="mb-5">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Necessitatibus, libero accusamus laborum deserunt ratione dolor
               officiis praesentium! Deserunt magni aperiam dolor eius dolore
               at, nihil iusto ducimus incidunt quibusdam nemo.
             </p>
           </div>
         </div>
       </div>
     </Parallax>
   </div>
 );
};

export default Intro;