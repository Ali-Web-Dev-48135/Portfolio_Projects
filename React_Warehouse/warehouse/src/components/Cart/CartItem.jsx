import React from "react";

const CartItem = (props) => {

  return (
    <tr
      className={props.className['cart-item']}>
      <td>{props.name}</td>
      <td>{props.qty}</td>
      <td>${props.unitprice}</td>
      <td>${props.total}</td>
    </tr>
  );
};

export default CartItem;
