import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes.contianer}>
      <div className={classes.lds_dual_ring}></div>
    </div>
  );
};

export default Loader;
