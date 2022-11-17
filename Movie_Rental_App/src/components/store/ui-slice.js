import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: { showCart: false },
  reducers: {
    showCartOn(state) {
      console.log(state.showCart);
      state.showCart = !state.showCart;
    },
  },
});

export const uiSliceAction = uiSlice.actions;
export const uiSliceReducer = uiSlice.reducer;
