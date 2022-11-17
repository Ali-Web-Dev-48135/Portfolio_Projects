import React from "react";
import {useDispatch} from "react-redux";
import { movieCartSliceAction } from "../store/movie-cart-slice";

import MovieItem from "./MovieItem";
import classes from './MovieList.module.css';

const MovieList = (props) => {
  const dispatch = useDispatch();

  const addMovieToCart = (movie) => {
    dispatch(movieCartSliceAction.addMovieToCart({
      id: movie.id,
      title: movie.title,
      desc: movie.description,
      fee: movie.fee,
      rating: movie.rating,
    }));
    
  };

  return (
    <ul className={classes['movie-list']}>
      {props.items.map((element) => {
        return (
          <MovieItem
            image={element.image}
            rating={element.rating}
            title={element.title}
            description={element.description}
            fee={element.fee}
            key={element.id}
            onClick={addMovieToCart.bind(this, element)}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
