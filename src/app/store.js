import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./slices/authenticationSlice";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";
export const store = configureStore({
  reducer: {
    auth: authenticationSlice,
    cart: cartSlice,
    fav: favoriteSlice,
  },
});
