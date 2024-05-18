import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'; 
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import MenuItems from '../../../shared/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';


const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter(item => item?.category === "popular");
  // const menuData = async () => {
  //   const { data } = await axios.get("menu.json");
  //   const popularItems = data.filter((item) => item.category === "popular");
  //   return popularItems;
  // };

  // const {
  //   data: menus = [],
  // } = useQuery({
  //   queryKey: ["menus"],
  //   queryFn: menuData,
  //   staleTime: 1000 * 60 * 60,
  //   cacheTime: 1000 * 60 * 60,
  //   refetchInterval: 1000 * 60 * 60,
  //   refetchIntervalInBackground: true,
  // });

  return (
    <section className="container mx-auto my-6">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="grid md:grid-cols-2 gap-10">
        {popular?.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <div className='flex items-center justify-center my-6'>
        <button className="btn btn-outline border-0 border-b-2  hover:bg-black hover:text-white hover:border-0">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;