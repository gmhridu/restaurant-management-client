import React from 'react';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import OrderTab from '../../Order/OrderTab/OrderTab';

const ChefRecommends = () => {
 const [menus] = useMenu()

 const offered = menus.filter((item) => item?.category === "offered").slice(0, 3);
 return (
   <div className='container mx-auto'>
   <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"} />
   <OrderTab items={offered}/>
   </div>
 );
};

export default ChefRecommends;