import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { favouriteActions } from "../../store/favourite-slice";

const MovieList = (props) => {
  const movies = props.results;
  const list = useSelector((state) => state.favourite.list);
  // const extractedFavourite = JSON.parse(localStorage.getItem("favourite"));

  // save the updated list to local storage when LIST changed
  // useEffect(() => {
  //   localStorage.setItem("favourite", JSON.stringify(list));
  //   console.log(list);
  // }, [list]);

  return (
    <div className={classes.list}>
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
    </div>
  );
};

export default MovieList;
