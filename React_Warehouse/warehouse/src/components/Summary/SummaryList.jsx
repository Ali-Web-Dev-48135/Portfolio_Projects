import React, { useContext } from "react";

import { WarehouseItemContext } from "../../context/UseContext";
import classes from "./SummaryList.module.css";

const SummaryList = (props) => {
  const dateOptions = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };

  const date = new Date();
  const toLocaleDate = date.toLocaleString("en-us", dateOptions);

  const { issuedItems } = useContext(WarehouseItemContext);
  return (
    <React.Fragment>
      <h2>Inventory Summary</h2>
      {issuedItems.length > 0 && (
        <div className={classes["summary-items-container"]}>
          <table className={classes["summary-items-table"]}>
            <thead>
              <tr>
                <td>Date</td>
                <td>Type</td>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>Qty</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              {issuedItems[0].map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <tr>
                      <td>{toLocaleDate}</td>
                      <td>{issuedItems[1].type}</td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.qty}</td>
                      <td>{item.qty * item.price}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </React.Fragment>
  );
};

export default SummaryList;
