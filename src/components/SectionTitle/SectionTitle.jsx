import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
 return (
   <div className='md:w-4/12 mx-auto my-8 space-y-2'>
     <p className="text-lg text-[#D99904] font-normal text-center">
       ---{subHeading}---
     </p>
     <h3 className="text-3xl font-medium uppercase text-center border-y-4 py-2">{heading}</h3>
   </div>
 );
};

export default SectionTitle;