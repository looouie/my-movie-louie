import { Fragment } from "react/cjs/react.production.min";
import { useSelector } from "react-redux";
import GridContainer from "../components/layout/Grid/GridContainer";
import MovieItem from "../components/movies/MovieItem";

const Favourite = () => {
  const list = useSelector((state) => state.favourite.list);
  const total = useSelector((state) => state.favourite.totalMovies);
  return (
    <Fragment>
      <h1>Favourite</h1>
      <h2>{total} movies saved</h2>
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
    </Fragment>
  );
};

export default Favourite;
