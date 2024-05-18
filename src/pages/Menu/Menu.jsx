import React from "react";
import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import Covered from "../../shared/Covered/Covered";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menus] = useMenu();
  const desserts = menus.filter((item) => item.category === "dessert");
  const soup = menus.filter((item) => item.category === "soup");
  const pizza = menus.filter((item) => item.category === "pizza");
  const salad = menus.filter((item) => item.category === "salad");
  const offered = menus.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Covered
        img={menuImg}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      />
      {/* main cover */}
      <SectionTitle subHeading={"Don't Miss"} heading={"TODAY'S OFFER"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessertImg}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />

      {/* pizza menu items*/}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={pizzaImg}
      />

      {/* salads menu items*/}
      <MenuCategory
        items={salad}
        title={"salads"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={saladImg}
      />

      {/* salads menu items*/}
      <MenuCategory
        items={soup}
        title={"soups"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        img={soupImg}
      />
    </div>
  );
};

export default Menu;
