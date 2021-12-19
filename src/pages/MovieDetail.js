import { useEffect, Fragment, useState, useCallback, useMemo } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { favouriteActions } from "../store/favourite-slice";
import * as AiIcons from "react-icons/ai";

import classes from "./MovieDetail.module.css";

import { getMovieDetail } from "../lib/api";
import useHttp from "../hooks/useHttp";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { movieId } = params;

  let isValid = false;
  let payload = {};

  const [isFavourite, setIsFavourite] = useState();

  const list = useSelector((state) => state.favourite.list);
  useEffect(() => {
    if (list.find((item) => item.id === parseInt(movieId))) {
      setIsFavourite(true);
    }
  }, [movieId]);

  const { sendRequest, data, status, error } = useHttp(getMovieDetail);
  useEffect(() => {
    sendRequest(movieId);
  }, [sendRequest, movieId]);

  if (!error && status === "completed") {
    isValid = true;
    payload = {
      id: data.id,
      title: data.title,
      poster_path: data.poster_path,
    };
  }

  const toggleFavorite = () => {
    const addToFavouriteHandler = (payload) => {
      dispatch(favouriteActions.addToFavouriteList(payload));
    };
    const removeFromFavouriteHandler = (id) => {
      dispatch(favouriteActions.removeFavouriteFromList(id));
    };

    if (isFavourite) {
      removeFromFavouriteHandler(movieId);
      setIsFavourite(false);
    } else {
      addToFavouriteHandler(payload);
      setIsFavourite(true);
    }
  };

  return (
    <Fragment>
      <div>
        <h1>Movie Detail</h1>
        {isValid && [
          <h2>{data.title}</h2>,
          <img
            alt="movie_poster"
            className={classes.backdrop}
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          />,
        ]}
        <div className={classes.add_favourite} onClick={toggleFavorite}>
          {isFavourite ? <AiIcons.AiFillHeart /> : <AiIcons.AiOutlineHeart />}
        </div>
      </div>
      {isValid && [
        <div className={classes.popularity}>
          <AiIcons.AiFillStar className={classes.star} />
          <p>Popularity: {data.popularity}</p>
        </div>,
        <p className={classes.description}>{data.overview}</p>,
      ]}
    </Fragment>
  );
};

export default MovieDetail;
