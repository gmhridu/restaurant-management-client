import React from 'react';
import MenuItems from '../../../shared/MenuItems/MenuItems';
import Covered from '../../../shared/Covered/Covered';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className="my-12">
      <div className="my-16">
        {title && <Covered img={img} title={title} description={description} />}
      </div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {items?.map((item) => (
            <MenuItems key={item?._id} item={item} />
          ))}
        </div>
        <div className="flex items-center justify-center my-6">
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-2  hover:bg-black hover:text-white hover:border-0 uppercase">
              Order Your Favourite Food
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;