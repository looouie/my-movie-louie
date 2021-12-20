import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useHttp from "../hooks/useHttp";
import { getAllPopular } from "../lib/api";

import Loader from "../components/layout/Loader/Loader";
import MovieList from "../components/movies/MovieList";

const Main = () => {
  const { sendRequest, data, error, status } = useHttp(getAllPopular);
  const [isLoading, setIsLoading] = useState(true);

  const LoadingHandler = (value) => {
    setIsLoading(value);
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Fragment>
      <h1>Popular Movie</h1>
      {isLoading && <Loader />}
      {!error && status === "completed" && (
        <MovieList results={data.results} loading={LoadingHandler} />
      )}
    </Fragment>
  );
};

export default Main;
