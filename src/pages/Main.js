import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import useHttp from "../hooks/useHttp";
import { getAllPopular } from "../lib/api";

import Loader from "../components/UI/Loader";
import MovieList from "../components/movies/MovieList";

const Main = () => {
  const { sendRequest, data, error, status } = useHttp(getAllPopular);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Fragment>
      <h1>Popular Movie</h1>
      {/* <Loader /> */}
      {status === "pending" && <Loader />}
      {!error && status === "completed" && <MovieList results={data.results} />}
    </Fragment>
  );
};

export default Main;
