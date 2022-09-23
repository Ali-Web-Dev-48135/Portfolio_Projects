import React from "react";

const WarehouseItem = (props) => {
  // continue here.
  const classes = `${
    props.className
      ? `${props.className["item"]}`
      : `${props.className["item"]}` + ` ${props.className}`
  }`;

  return (
    <li className={classes}>
      {props.id ? <p>{props.id}</p> : ""}
      <p>{props.name}</p>
      {props.description ? `Desc: ${(<p>{props.description}</p>)}` : ""}
      <p>Qty: {props.qty}</p>
      <p>Price: ${props.price}</p>
      <p>Category: {props.category}</p>
    </li>
  );
};

export default WarehouseItem;
