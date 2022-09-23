import React, { useContext } from "react";
import { WarehouseItemContext } from "../../context/UseContext";

import WarehouseItem from "./WarehouseItem";
import classes from "./ItemsList.module.css";

const ItemsList = (props) => {
  const { Items } = useContext(WarehouseItemContext);

  // Add sorting function to sort by category option for user.

  

  return (
    <React.Fragment>
      <h3 className={classes["item-header"]}>Warehouse Items</h3>
      <ul className={classes["item-list"]}>
        {Items.map((element) => (
          <WarehouseItem
            key={element.id}
            className={classes}
            name={element.name}
            qty={element.qty}
            price={element.price}
            category={element.category}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ItemsList;
