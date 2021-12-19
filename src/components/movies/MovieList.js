import MovieItem from "./MovieItem";
// import classes from "./MovieList.module.css";
import { useSelector } from "react-redux";
import GridContainer from "../layout/Grid/GridContainer";

const MovieList = (props) => {
  const movies = props.results;
  const favouriteList = useSelector((state) => state.favourite.list);
  const watchLaterList = useSelector((state) => state.watchLater.list);

  return (
    <GridContainer>
      {movies.map((movie) => {
        const favourited = favouriteList.find((x) => x.id === movie.id);
        const watchLater = watchLaterList.find((x) => x.id === movie.id);

        return (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            favourited={favourited ? true : false}
            watchLater={watchLater ? true : false}
          />
        );
      })}
    </GridContainer>
  );
};

export default MovieList;
