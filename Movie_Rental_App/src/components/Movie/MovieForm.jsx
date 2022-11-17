import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { movieSliceAction } from "../store/movie-slice";

import classes from "./MovieForm.module.css";

const MovieForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setDescHandler = (event) => {
    setDesc(event.target.value);
  };
  const setPriceHandler = (event) => {
    setPrice(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(
      movieSliceAction.addmovie({
        id: Math.random(),
        title,
        desc,
      })
    );
    setTitle("");
    setDesc("");
    setPrice("");
  };
  const nStyles = `${classes["value-container"]} ${classes["number"]}`;

  return (
    <form onSubmit={submitFormHandler} className={classes["movie-form"]}>
      <div className={classes["value-container"]}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={setTitleHandler}
        />
      </div>
      <div className={classes["value-container"]}>
        <input
          type="text"
          placeholder="Desc"
          value={desc}
          onChange={setDescHandler}
        />
      </div>
      <div className={nStyles}>
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={setPriceHandler}
        />
      </div>
      <div className={nStyles}>
        <input
          type="text"
          placeholder="Qty"
          value={qty}
          onChange={setPriceHandler}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

export default MovieForm;
