import React from 'react';
import { GrFacebookOption } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";



const Footer = () => {
 const currentYear = new Date().getFullYear()
 return (
   <footer>
     {/* footer */}
     <div className="flex">
       <div className="bg-[#1F2937] text-white text-center py-20 space-y-2 w-1/2">
         <h3 className="text-3xl font-medium">CONTACT US</h3>
         <p className="text-base font-normal">
           123 ABS Street, Uni 21, Bangladesh
         </p>
         <p>+88 123456789</p>
         <p>Mon - Fri: 08:00 - 22:00</p>
         <p>Sat - Sun: 10:00 - 23:00</p>
       </div>
       <div className="bg-[#111827] text-white text-center py-20 space-y-3 w-1/2">
         <h3 className="text-3xl font-medium">Follow US</h3>
         <p className="text-base font-normal">Join us on social media</p>
         <div className="flex gap-x-3 items-center justify-center">
           <GrFacebookOption className="text-xl" />
           <LuInstagram className="text-xl" />
           <FaTwitter className="text-xl" />
         </div>
       </div>
     </div>
     {/* footer end */}
     <div className="footer footer-center p-4 bg-[#151515] text-white">
       <aside>
         <p>Copyright © {currentYear} - CulinaryCloud. All rights reserved.</p>
       </aside>
     </div>
   </footer>
 );
};

export default Footer;