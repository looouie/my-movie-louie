import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import useHttp from "../hooks/useHttp";
import { getAllPopular } from "../lib/api";

import MovieList from "../components/movies/MovieList";

const Main = () => {
  const { sendRequest, data, error, status } = useHttp(getAllPopular);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Fragment>
      <h1>Popular Movie</h1>
      {!error && status === "completed" ? (
        <MovieList results={data.results} />
      ) : (
        <p>There is no popular movie yet</p>
      )}
    </Fragment>
  );
};

export default Main;
