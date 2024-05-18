import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../Slice/menuSlice";

const store = configureStore({
  reducer: {
    // reducer
    menu: menuReducer,
  },
});

export default store;