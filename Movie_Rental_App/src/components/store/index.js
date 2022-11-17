import { configureStore } from "@reduxjs/toolkit";

import { movieSliceReducer } from "./movie-slice";
import { authSliceReducer } from "./auth-slice";
import { uiSliceReducer } from "./ui-slice";
import {  movieCartSliceReducer } from "./movie-cart-slice";
export const store = configureStore({
  reducer: {
    movieslice: movieSliceReducer,
    authSlice: authSliceReducer,
    uiSlice: uiSliceReducer,
    movieCartSlice: movieCartSliceReducer,
  },
});
