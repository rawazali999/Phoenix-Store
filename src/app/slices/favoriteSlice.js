import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.favorite.find(
        (item) => item.id === action.payload.id,
        state.favorite.push({ ...action.payload })
      );
    },
    removeFav: (state, action) => {
      const removeFav = state.favorite.filter(
        (item) => item.id !== action.payload
      );
      state.favorite = removeFav;
    },
  },
});

export const { addToFav, removeFav } = favoriteSlice.actions;

export default favoriteSlice.reducer;
