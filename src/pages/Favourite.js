import { Fragment } from "react/cjs/react.production.min";
import { useSelector } from "react-redux";

const Favourite = () => {
  // const list = useSelector((state) => state.favourite.list);
  const total = useSelector((state) => state.favourite.totalMovies);
  return (
    <Fragment>
      <h1>Favourite</h1>
      <p>{total}</p>
    </Fragment>
  );
};

export default Favourite;
