import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login')
 return (
   <div className="font-inter">
    {noHeaderFooter  ||  <Navbar />}
     <Outlet />
    {noHeaderFooter || <Footer />}
   </div>
 );
};

export default Main;