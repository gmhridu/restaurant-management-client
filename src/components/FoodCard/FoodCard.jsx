import React from "react";

const FoodCard = ({ item }) => {
 const { name, image, price, recipe } = item;
  return (
    <div className="lg:w-96 lg:h-96 my-5">
      <div className="card card-compact w-full h-full bg-[#F3F3F3] shadow-xl border border-[#ddd]">
        <figure className="h-[250px]">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </figure>
        <p className="bg-[#111827] p-3 text-white rounded-lg absolute right-0 mr-4 mt-4">
          ${price}
        </p>
        <div className="card-body flex items-center justify-center space-y-1">
          <h2 className="card-title text-[#151515] text-xl font-semibold">
            {name}
          </h2>
          <p className="text-base text-[#737373] font-normal">{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn border-0 border-b-2 border-b-[#BB8506] text-[#BB8506] bg-[#E8E8E8] hover:bg-[#111827]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
