import React from 'react';

const MenuItems = ({ item }) => {
 const { name, image, price, recipe } = item;
 return (
   <div className="flex space-x-2">
     <div className='w-[118px]'>
       <img src={image} alt="" className="w-full h-full rounded-custom" />
     </div>
     <div className='space-y-2'>
       <h3 className="font-cinzel text-xl font-normal text-[#151515] uppercase">
         {name} ---------------
       </h3>
       <p className="text-base text-[#737373] font-normal">{recipe}</p>
     </div>
     <p className="text-lg text-[#BB8506] font-normal inline-flex">${price}</p>
   </div>
 );
};

export default MenuItems;