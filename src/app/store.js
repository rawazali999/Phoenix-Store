import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./slices/authenticationSlice";
import quantitySlice from "./slices/quantitySlice";
import cartSlice from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    auth: authenticationSlice,
    quantity: quantitySlice,
    cart: cartSlice,
  },
});
