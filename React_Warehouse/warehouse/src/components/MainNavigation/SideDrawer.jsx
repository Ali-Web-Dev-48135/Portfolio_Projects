import React from "react";
import ReactDom from "react-dom";

import classes from "./SideDrawer.module.css";

const Content = (props) => {
  
  return(
    <aside className={classes["side-drawer"]} onClick={props.onClick}>
      {props.children}
    </aside>
  )
};

const SideDrawer = (props) => {

  return (
    <React.Fragment>
        {ReactDom.createPortal(<Content>{props.children}</Content>,document.getElementById("side-drawer-hook"))};
    </React.Fragment>
  )
  
};

export default SideDrawer;
