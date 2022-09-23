import React, {useState, useContext} from "react";
import { NavLink, useLocation } from "react-router-dom";

import { WarehouseItemContext } from "../../context/UseContext";
import Button from "../UIElements/Button";
import classes from "./NavLinks.module.css";

const Navbar = (props) => {

  const {showCartHandler} = useContext(WarehouseItemContext);
  const location = useLocation();

  return (
    <ul className={classes["nav-links"]}>
      {location.pathname !== "/summary" && (
        <li>
          <NavLink to="/summary" activeClassName={classes.active}>
            Summary
          </NavLink>
        </li>
      )}
      {location.pathname !== "/issue" && (
        <li>
          <NavLink to="/issue" activeClassName={classes.active}>
            Issue
          </NavLink>
        </li>
      )}
      {location.pathname !== "/receive" && (
        <li>
          <NavLink to="/receive" activeClassName={classes.active}>
            Receive
          </NavLink>
        </li>
      )}
      {location.pathname === "/issue" && (
        <Button
          className={classes["show-cart-btn"]}
          onClick={showCartHandler}
        >
          Cart
        </Button>
      )}
    </ul>
  );
};

export default Navbar;
