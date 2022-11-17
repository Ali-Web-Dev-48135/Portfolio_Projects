import React from "react";

import classes from "./MovieItem.module.css";
import Button from "../UIElement/Button";

const MovieItem = (props) => {
  return (
    <React.Fragment>
      <li className={classes["movie-item-container"]}>
        <div className={classes["movie-image-container"]}>
          <img src={props.image} alt={props.title} />
          <p>Rating: {props.rating}</p>
        </div>
        <div className={classes["movie-title-container"]}>
          <article className={classes["movie-article"]}>
            <p>{props.title}</p>
            <p className={classes['movie-desc']}>{props.description}</p>
          </article>
          <div className={classes["movie-fee-container"]}>
            <p>Daily Fee: ${props.fee}</p>
            <Button className={classes["rent-btn"]} onClick={props.onClick}>
              Rent
            </Button>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default MovieItem;

/* <div className={classes["actions-container"]}> 
{/* <button onClick={props.onClick}>View</button> */
// </div>*/
