import React from "react";

const Table = (props) => {
  return (
    <React.Fragment>
      <table className={props.className["cart-table"]}>
        <thead>
            <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Total Price</th>
            </tr>
        </thead>
        {props.children}
      </table>
    </React.Fragment>
  );
};

export default Table;
