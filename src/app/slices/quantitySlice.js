import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 1,
};

const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    increment: (state) => { // increment the quantity by 1 if it is less than 10(selling product minimum limit)
      if (state.quantity < 10) {
        state.quantity += 1;
      }
    },
    decrement: (state) => {
      if (state.quantity > 1) { // decrement the quantity by 1 if it is greater than 1(selling product maximum limit)
        state.quantity -= 1;
      }
    },
  },
});

export const { increment, decrement } = quantitySlice.actions;

export default quantitySlice.reducer;
