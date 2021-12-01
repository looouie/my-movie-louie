import classes from "./GridContainer.module.css";

const GridContainer = (props) => {
  return <div className={classes.grid}>{props.children}</div>;
};

export default GridContainer;
