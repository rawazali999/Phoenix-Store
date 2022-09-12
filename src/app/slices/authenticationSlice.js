import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  username: '',
};

const authenticationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = '';
      localStorage.removeItem('username');
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;