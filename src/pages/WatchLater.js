// import Loader from "../components/UI/Loader";
import { useSelector, useDispatch } from "react-redux";
import { watchLaterActions } from "../store/watchLater-slice";

import classes from "./WatchLater.module.css";

import GridContainer from "../components/layout/Grid/GridContainer";
import MovieItem from "../components/movies/MovieItem";
import Button from "../components/layout/Button/Button";

const WatchLater = () => {
  const list = useSelector((state) => state.watchLater.list);
  const total = useSelector((state) => state.watchLater.totalMovies);

  const dispatch = useDispatch();

  const removeAllHandler = () => {
    dispatch(watchLaterActions.removeAllWatchLater());
  };

  const subHeader = total > 0 ? `${total} movies saved` : "No movie saved";

  return (
    <>
      <h1>Watch Later</h1>
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
        {list.map((movie) => {
          return (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.posterPath}
              watchLater={true}
            />
          );
        })}
      </GridContainer>
    </>
  );
};

export default WatchLater;
