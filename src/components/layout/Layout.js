import classes from "./Layout.module.css";
import Navbar from "./Navbar";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.container}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
