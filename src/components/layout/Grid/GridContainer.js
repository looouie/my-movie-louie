import classes from "./GridContainer.module.css";

const GridContainer = (props) => {
  return <div className={classes.list}>{props.children}</div>;
};

export default GridContainer;
