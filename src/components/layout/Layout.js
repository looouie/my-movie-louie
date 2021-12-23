import classes from "./Layout.module.css";
import Navbar from "./Navbar/Navbar";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Layout = (props) => {
  const dispatch = useDispatch();
  const sidebarIsOpen = useSelector((state) => state.ui.sidebarIsVisible);

  const closeSidebar = () => {
    if (!sidebarIsOpen) {
      return;
    } else {
      dispatch(uiActions.toggleSidebar());
    }
  };

  return (
    <Fragment>
      <Navbar />
      <main className={classes.container} onClick={closeSidebar}>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
