import { Fragment, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import useHttp from "../hooks/useHttp";
import { getAllPopular } from "../lib/api";

import Loader from "../components/layout/Loader/Loader";
import MovieItem from "../components/movies/MovieItem";
import GridContainer from "../components/layout/Grid/GridContainer";

const Main = () => {
  const { sendRequest, data, error, status } = useHttp(getAllPopular);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const favouriteList = useSelector((state) => state.favourite.list);
  const watchLaterList = useSelector((state) => state.watchLater.list);

  const counter = useRef(0);

  const itemIsLoaded = () => {
    counter.current += 1;
    console.log(counter);

    if (counter.current === data.results.length - 1) {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Popular Movie</h1>
      {loading ? <Loader /> : ""}
      <GridContainer>
        {!error &&
          status === "completed" &&
          data.results.map((movie) => {
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
                onLoad={itemIsLoaded}
              />
            );
          })}
      </GridContainer>
    </>
  );
};

export default Main;
