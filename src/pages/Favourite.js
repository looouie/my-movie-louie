import { useSelector, useDispatch } from "react-redux";
import { favouriteActions } from "../store/favourite-slice";

import classes from "./Favourite.module.css";

import GridContainer from "../components/layout/Grid/GridContainer";
import MovieItem from "../components/movies/MovieItem";
import Button from "../components/layout/Button/Button";

const Favourite = () => {
  const favouriteList = useSelector((state) => state.favourite.list);
  const total = useSelector((state) => state.favourite.totalMovies);
  const watchLaterList = useSelector((state) => state.watchLater.list);

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
        <Button
          className={total === 0 ? ".disable" : ""}
          onClick={removeAllHandler}
          disable={total === 0 ? true : false}
        >
          Remove All
        </Button>
      </div>
      <GridContainer>
        {favouriteList.map((movie) => {
          const watchLater = watchLaterList.find((x) => x.id === movie.id);

          return (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.posterPath}
              favourited={true}
              watchLater={watchLater ? true : false}
            />
          );
        })}
      </GridContainer>
    </>
  );
};

export default Favourite;
