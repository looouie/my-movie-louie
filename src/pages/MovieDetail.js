import { useParams } from "react-router";
import { useEffect } from "react";

import classes from "./MovieDetail.module.css";

import { getMovieDetail } from "../lib/api";
import useHttp from "../hooks/useHttp";

const MovieDetail = () => {
  const params = useParams();
  const { movieId } = params;
  let isValid = false;

  const { sendRequest, data, status, error } = useHttp(getMovieDetail);
  useEffect(() => {
    sendRequest(movieId);
  }, [sendRequest, movieId]);

  console.log(data);
  if (!error && status === "completed") {
    isValid = true;
  }

  return (
    <div>
      <h1>Movie Detail</h1>
      <h2>{movieId}</h2>
      {isValid ? <h3>{data.title}</h3> : "nothing"}
      {isValid ? (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          className={classes.backdrop}
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        />
      ) : (
        "nothing"
      )}
    </div>
  );
};

export default MovieDetail;
