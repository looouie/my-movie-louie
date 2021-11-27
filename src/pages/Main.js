import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import useHttp from "../hooks/useHttp";
import { getAllPopular } from "../lib/api";

import MovieList from "../components/movies/MovieList";

const Main = () => {
  const { sendRequest, data, error, status } = useHttp(getAllPopular);
  const total = useSelector((state) => state.favourite.totalMovies);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Fragment>
      <h1>Popular Movie</h1>
      <h2>Favourite: {total}</h2>
      {!error && status === "completed" ? (
        <MovieList results={data.results} />
      ) : (
        "There is no popular movie yet"
      )}
    </Fragment>
  );
};

export default Main;
