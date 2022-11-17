import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {uiSliceAction} from "../store/ui-slice";

import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.movieCartSlice.totalAmount);
  // const showMyMovies = useSelector(state => state.movieSlice.showMyMovies)

  const showMovieCartHandler = () => {
    dispatch(uiSliceAction.showCartOn());
  };

  return (
    <header className={classes["header"]}>
      <div className={classes['title-container']}>
        <h3>Rent A Movie</h3>
      </div>
      <div
        className={classes["my-movies-container"]}
        onClick={showMovieCartHandler}
      >
        <span>My Cart</span>
      </div>
      <div className={classes['total-amount']}>
        <span>Total: ${totalAmount}</span>
      </div>
    </header>
  );
};

export default Header;
