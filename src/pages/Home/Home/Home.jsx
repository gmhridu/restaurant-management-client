import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
import Intro from '../Intro/Intro';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';

const Home = () => {
 return (
   <div>
     <Helmet>
       <title>Bistro Boss | Home</title>
     </Helmet>
     <Banner />
     <Category />
      <Intro/>    
     <PopularMenu />
     <CallUs />
     <ChefRecommends/>
     <Featured />
     <Testimonials />
   </div>
 );
};

export default Home;