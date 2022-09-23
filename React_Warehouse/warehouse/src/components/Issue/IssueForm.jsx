import React, { useContext, useState, useEffect } from "react";
import { WarehouseItemContext } from "../../context/UseContext";

import BackDropModal from "../UIElements/BackdropModal";
import IssueItem from "./IssueItem";
import Cart from "../Cart/Cart";

import classes from "./IssueForm.module.css";

const IssueForm = (props) => {
  // Complete Array Of Items.
  const { Items, showCart } = useContext(WarehouseItemContext);

  const [itemArray, setItemArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  const itemAdder = (item) => {
    setItemArray((prev) => {
      return [...prev, item];
    });
  };

  useEffect(() => {
    let tempArray = [...itemArray];
    setFilteredArray([...tempArray]);
  }, [itemArray]);

  const issueItems = Items.map((item) => (
    <IssueItem
      name={item.name}
      qty={item.qty}
      price={item.price}
      id={item.id}
      key={item.id}
      itemAdder={itemAdder}
    />
  ));

  return (
    <React.Fragment>
      {showCart && <Cart items={filteredArray} />}
      {/* {showAlert && <BackDropModal onClick={() => console.log("B")} />} */}
      <div className={classes["issue-form"]}>
        <ul className={classes["issue-ul"]}>{issueItems}</ul>
      </div>
      {/* </form> */}
    </React.Fragment>
  );
};

export default IssueForm;
