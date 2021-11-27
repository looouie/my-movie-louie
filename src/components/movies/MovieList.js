import MovieItem from "./MovieItem";
// import classes from "./MovieList.module.css";
import { useSelector } from "react-redux";
import GridContainer from "../layout/Grid/GridContainer";

const MovieList = (props) => {
  const movies = props.results;
  const list = useSelector((state) => state.favourite.list);

  return (
    <GridContainer>
      {movies.map((movie) => {
        const found = list.find((x) => x.id === movie.id);
        return (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            favourited={found ? true : false}
          />
        );
      })}
    </GridContainer>
  );
};

export default MovieList;
