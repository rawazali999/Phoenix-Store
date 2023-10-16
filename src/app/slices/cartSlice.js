import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // instead of using if else and push, we can use ternary operator with spread operator to add item to cart
      state.items = [...state.items, { ...action.payload, quantity: 1 }];
    },

    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
    },
    removeItem: (state, action) => {
      const remainedItem = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = remainedItem;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
