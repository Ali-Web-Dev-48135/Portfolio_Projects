import React, { useContext } from "react";
import { WarehouseItemContext } from "../../context/UseContext";
import { useHistory } from "react-router-dom";

import CartItem from "./CartItem";
import Table from "./Table";
import CartCheckoutControl from "./CartCheckoutControl";
import Alert from "../UIElements/Alert";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const history = useHistory();

  const { Items, setIssuedItemsHandler, showCartHandler } = useContext(WarehouseItemContext);
  const uniqueItem = [...new Set(props.items)];

  let uniqueObject = [];
  let id;
  let qty = 0;

  for (let uni = 0; uni < uniqueItem.length; uni++) {
    id = uniqueItem[uni];
    for (let i = 0; i < props.items.length; i++) {
      if (id === props.items[i]) {
        qty += 1;
      }
    }
    const foundItemInContext = Items.find((item) => item.id === id);
    uniqueObject.push(Object.assign(foundItemInContext, { qty }));
    qty = 0;
  }
  const checkOutPrice = uniqueObject
    .map((e) => e.price * e.qty)
    .reduce((p, c) => {
      return p + c;
    }, 0);

  const onSubmitFormHandler = (event) => {
    // let message = isCartEmpty
    //   ? "Cart cannot be empty"
    //   : "Order submitted succesfully";
    event.preventDefault();

    if (uniqueObject.length <= 0) {
      return;
    }

    setIssuedItemsHandler(uniqueObject, "Issued");
    // Redirect to summary page and toggle the cart off.
    history.push("/summary");
    showCartHandler();
  };

  return (
    <form className={classes["cart-container"]} onSubmit={onSubmitFormHandler}>
      <header className={classes["cart-header"]}>
        <p>Your Cart</p>
      </header>
      <div className={classes["cart-content-wrapper"]}>
        <Table className={classes}>
          <tbody>
            {uniqueObject.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                qty={item.qty}
                unitprice={item.price}
                total={item.price * item.qty}
                className={classes}
              />
            ))}
          </tbody>
        </Table>
        <CartCheckoutControl price={checkOutPrice} className={classes} />
      </div>
    </form>
  );
};

export default Cart;
