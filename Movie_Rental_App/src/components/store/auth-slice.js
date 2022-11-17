import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth-slice",
  initialState: { authenticated: false },
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

export const authSliceActions = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
