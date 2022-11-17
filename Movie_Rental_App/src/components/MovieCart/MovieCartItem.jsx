import React from "react";

import {useDispatch} from "react-redux";
import { movieCartSliceAction } from "../store/movie-cart-slice";
import classes from "./MovieCartItem.module.css";


const MovieCartItem = (props) => {
  const dispatch = useDispatch();

  
  const addAnother = (movieId) => {
    console.log({id: movieId});
    dispatch(movieCartSliceAction.addMovieToCart({id: movieId}));  
  };

  const removeMovie = (movie) => {
    dispatch(movieCartSliceAction.removemovieFromCart(movie));
  };

  return (
    <li className={classes["movie-cart-item"]}>
      <div className={classes['cart-item-info-container']}>
        <p>{props.title}</p>
        <p>{props.quantity}x</p>
        <p>${props.fee * props.quantity}</p>
      </div>
      <div className={classes["movie-cart-actions-container"]}>
        <span onClick={removeMovie.bind(this, props.id)}>-</span>
        <span onClick={addAnother.bind(this, props.id)}>+</span>
      </div>
    </li>
  );
};

export default MovieCartItem;
