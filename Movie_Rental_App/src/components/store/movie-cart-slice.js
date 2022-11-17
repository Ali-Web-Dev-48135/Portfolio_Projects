import { createSlice } from "@reduxjs/toolkit";

const movieCartSlie = createSlice({
  name: "movie-cart-slice",
  initialState: {
    movieCartItems: [],
    numberOfMovies: 0,
    totalAmount: 0,
  },
  reducers: {
    addMovieToCart(state, action) {
      const newMovie = action.payload;
      const checkAvailability = state.movieCartItems.find(
        (movie) => newMovie.id === movie.id
      );
      if (!checkAvailability) {
        const newItemObject = {
          id: newMovie.id,
          title: newMovie.title,
          desc: newMovie.desc,
          quantity: 1,
          fee: newMovie.fee,
          rating: newMovie.rating,
        };
        state.movieCartItems.push(newItemObject);
        state.totalAmount += newItemObject.fee;
        state.numberOfMovies = state.movieCartItems.length;
      } else if (checkAvailability) {
        const findTheMovie = state.movieCartItems.find(
          (movie) => movie.id === checkAvailability.id
        );
        console.log(findTheMovie.title);
        const movieFoundIndex = state.movieCartItems.findIndex(
          (movie) => movie.id === findTheMovie.id
        );
        state.movieCartItems[movieFoundIndex].quantity += 1;
        state.totalAmount += state.movieCartItems[movieFoundIndex].fee;
      }
    },
    removemovieFromCart(state, action) {
      // REMOVE MOVIE FROM LIST BASED ON ID.
      const movieId = action.payload;
      const findTheMovie = state.movieCartItems.find(
        (movie) => movie.id === movieId
      );
      const findTheIndexOfMovie = state.movieCartItems.findIndex(
        (movie) => movie.id === findTheMovie.id
      );
      if (state.movieCartItems[findTheIndexOfMovie].quantity >= 1) {
        state.movieCartItems[findTheIndexOfMovie].quantity--;
        state.totalAmount -= state.movieCartItems[findTheIndexOfMovie].fee;
      } else {
        return;
      }
    },
    printmoviedata(state) {
      console.log(state.movieCartItems);
    },
  },
});

export const movieCartSliceAction = movieCartSlie.actions;
export const movieCartSliceReducer = movieCartSlie.reducer;
