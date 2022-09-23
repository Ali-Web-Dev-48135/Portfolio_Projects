import React, { useState } from "react";
import { Items } from "../data/Items";

export const WarehouseItemContext = React.createContext();

const UseContext = (props) => {
  const [issuedItems, setIssuedItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const setIssuedItemsHandler = (newItems, type) => {
    setIssuedItems((prev) => {
      return [...prev, newItems, { type }];
    });
  };

  const showCartHandler = () => {
    setShowCart((prevValue) => !prevValue);
  };

  return (
    <WarehouseItemContext.Provider
      value={{
        Items,
        setIssuedItemsHandler,
        issuedItems,
        showCart,
        showCartHandler,
      }}
    >
      {props.children}
    </WarehouseItemContext.Provider>
  );
};

export default UseContext;
