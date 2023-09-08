import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const ItemInWishlist = state.favorite.find(
        (item) => item.id === action.payload.id
      );
      if (!ItemInWishlist) {
        state.favorite = [...state.favorite, action.payload];
      }
    },
    removeFav: (state, action) => {
      const remainedItem = state.favorite.filter(
        (item) => item.id !== action.payload
      );
      state.favorite = remainedItem;
    },
  },
});

export const { addToFav, removeFav } = favoriteSlice.actions;

export default favoriteSlice.reducer;
