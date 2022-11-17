import React from "react";
import { useSelector } from "react-redux";

import classes from "./MovieCart.module.css";
import MovieCartItem from "./MovieCartItem";
import Backdrop from "../UIElement/Backdrop";

const MovieCart = (props) => {
  const movieCartItems = useSelector(
    (state) => state.movieCartSlice.movieCartItems
  );

  const showMovieCart = useSelector((state) => state.uiSlice.showCart);

  
    return (
    <React.Fragment>
      {movieCartItems.length <= 0 && <p>No Movies Yet.</p>}
      {showMovieCart && (
        <Backdrop>
          <ul className={classes["movie-cart"]}>
            {
              movieCartItems.map(movie => {
                return(
                  <MovieCartItem
                  key={movie.id}
                  quantity={movie.quantity}
                  fee={movie.fee}
                  title={movie.title}
                  id={movie.id}
                  />
                )
              })
            }
          </ul>
        </Backdrop>
      )}
    </React.Fragment>
  );
};

export default MovieCart;
