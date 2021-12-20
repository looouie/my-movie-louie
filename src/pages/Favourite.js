import { useSelector, useDispatch } from "react-redux";
import { favouriteActions } from "../store/favourite-slice";

import classes from "./Favourite.module.css";

import GridContainer from "../components/layout/Grid/GridContainer";
import MovieItem from "../components/movies/MovieItem";
import Button from "../components/layout/Button/Button";

const Favourite = () => {
  const list = useSelector((state) => state.favourite.list);
  const total = useSelector((state) => state.favourite.totalMovies);

  const dispatch = useDispatch();

  const removeAllHandler = () => {
    dispatch(favouriteActions.removeAllFavourite());
  };

  const subHeader = total > 0 ? `${total} movies saved` : "No movie saved";

  return (
    <>
      <h1>Favourite</h1>
      <div className={classes.flexContainer}>
        <h2 className={classes.counter}>{subHeader}</h2>
        <Button className={classes.removeAllBtn} onClick={removeAllHandler}>
          Remove All
        </Button>
      </div>
      <GridContainer>
        {list.map((movie) => {
          return (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.posterPath}
              favourited={true}
            />
          );
        })}
      </GridContainer>
    </>
  );
};

export default Favourite;
