import classes from "./FlexContainer.module.css";

const FlexContainer = (props) => {
  return (
    <div className={`${classes.flex} ${props.className}`}>{props.children}</div>
  );
};

export default FlexContainer;
