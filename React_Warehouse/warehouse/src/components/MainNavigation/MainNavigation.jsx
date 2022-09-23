import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import Header from "./Header";
import SideDrawer from "./SideDrawer";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import BackdropModal from "../UIElements/BackdropModal";

const MainNavigation = (props) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);

  const openSideDrawerHandler = () => {
    setOpenSideDrawer(true);
  };

  const closeSideDrawerHandler = () => {
    setOpenSideDrawer(false);
  };

  return (
    <React.Fragment>
      {openSideDrawer && <BackdropModal onClick={closeSideDrawerHandler} />}
      {openSideDrawer && (
        <SideDrawer>
          <nav
            className={classes["main-nav__drawer-nav"]}
            onClick={closeSideDrawerHandler}
          >
            <Navbar />
          </nav>
        </SideDrawer>
      )}
      <Header>
        <Hamburger onClick={openSideDrawerHandler} />
        <div className={classes["main-nav__header-title"]}>
          <Link to="/">Warehouse</Link>
        </div>
        <nav className={classes["main-nav__header-nav"]}>
          <Navbar />
        </nav>
      </Header>
    </React.Fragment>
  );
};

export default MainNavigation;
