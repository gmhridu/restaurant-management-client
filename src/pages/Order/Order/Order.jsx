import React, { useState } from 'react';
import orderCover from '../../../assets/shop/order.jpg'
import Covered from '../../../shared/Covered/Covered';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
 const categories = ["salads", "pizza", "soups", "dessert", "drinks"];
 const { category } = useParams()
 const initialIndex = categories.indexOf(category)
 const [tabIndex, setTabIndex] = useState(initialIndex);
 const [menus] = useMenu()


 const desserts = menus.filter((item) => item.category === "dessert");
  const soup = menus.filter((item) => item.category === "soup");
  const pizza = menus.filter((item) => item.category === "pizza");
  const salad = menus.filter((item) => item.category === "salad");
  const drinks = menus.filter((item) => item.category === "drinks");
 return (
   <div>
     <Helmet>
       <title>Bistro Boss | Order Food</title>
     </Helmet>
     <Covered
       img={orderCover}
       title={"OUR SHOP"}
       description={"Would you like to try a dish?"}
     />
     <div className="container mx-auto flex items-center justify-center my-5">
       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
         <TabList>
           <Tab>Salad</Tab>
           <Tab>Pizza</Tab>
           <Tab>Soups</Tab>
           <Tab>Dessert</Tab>
           <Tab>Drinks</Tab>
         </TabList>
         <TabPanel>
           <OrderTab items={salad} />
         </TabPanel>
         <TabPanel>
           <OrderTab items={pizza} />
         </TabPanel>
         <TabPanel>
           <OrderTab items={soup} />
         </TabPanel>
         <TabPanel>
           <OrderTab items={desserts} />
         </TabPanel>
         <TabPanel>
           <OrderTab items={drinks} />
         </TabPanel>
       </Tabs>
     </div>
   </div>
 );
};

export default Order;