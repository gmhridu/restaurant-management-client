import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
 name: "menu",
 initialState: [],
 menus: [],
 desserts: [],
 soup: [],
 pizza: [],
 salad: [],
 drinks: [],
 popular: [],
 offered: [],
 reducers: {
  setMenu: (state, action) => {
   state.menus = action.payload;
   state.desserts = action.payload.filter((item) => item.category === 'dessert');
   state.soup = action.payload.filter((item) => item.category === "soup");
   state.pizza = action.payload.filter((item) => item.category === "pizza");
   state.salad = action.payload.filter((item) => item.category === "salad");
   state.drinks = action.payload.filter((item) => item.category === "drinks");
   state.popular = action.payload.filter(
    (item) => item.category === "popular"
   );
   state.offered = action.payload.filter(
    (item) => item.category === "offered"
   );
  }
 }
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;