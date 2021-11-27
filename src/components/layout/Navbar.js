import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { uiActions } from "../../store/ui-slice";

import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";

const Navbar = () => {
  const dispatch = useDispatch();

  const showSidebar = useSelector((state) => state.ui.sidebarIsVisible);

  //redux store
  const toggle = () => {
    dispatch(uiActions.toggleSidebar());
  };

  return (
    <IconContext.Provider value={{ color: "#463f3a" }}>
      <div className={classes.navbar}>
        <Link to="#" className={classes.menu_icon}>
          <FaIcons.FaBars onClick={toggle} />
        </Link>
        <Link to="/main" className={classes.home_icon}>
          <AiIcons.AiOutlineHome />
        </Link>
        <h1 className={classes.header}>Louie Movie.com</h1>
      </div>
      <nav
        className={
          showSidebar
            ? `${classes.nav_menu} ${classes.active} `
            : `${classes.nav_menu}`
        }
      >
        <ul className={classes.nav_menu_items}>
          <li className={classes.navbar_toggle}>
            <Link to="#" className={classes.menu_bars}></Link>
            <GrIcons.GrFormClose onClick={toggle} />
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={classes[item.cName]}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
