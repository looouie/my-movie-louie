import { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { favouriteActions } from "../../store/favourite-slice";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import Loader from "../../components/layout/Loader/Loader";

import classes from "./MovieDetail.module.css";

import { getMovieDetail } from "../../lib/api";
import useHttp from "../../hooks/useHttp";
import { watchLaterActions } from "../../store/watchLater-slice";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { movieId } = params;

  let isValid = false;
  let payload = {};

  const [loading, setLoading] = useState(true);
  const imageIsLoaded = () => {
    setLoading(false);
  };

  const [isFavourite, setIsFavourite] = useState();
  const [isWatchLater, setIsWatchLater] = useState();

  const favouriteList = useSelector((state) => state.favourite.list);
  const watchLaterList = useSelector((state) => state.watchLater.list);

  useEffect(() => {
    if (favouriteList.find((item) => item.id === parseInt(movieId))) {
      setIsFavourite(true);
    }
    if (watchLaterList.find((item) => item.id === parseInt(movieId))) {
      setIsWatchLater(true);
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
      posterPath: data.poster_path,
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

  const toggleWatchLater = () => {
    const addToWatchLaterHandler = (payload) => {
      dispatch(watchLaterActions.addToWatchLaterList(payload));
    };
    const removeFromWatchLaterHandler = (id) => {
      dispatch(watchLaterActions.removeWatchLaterFromList(id));
    };

    if (isWatchLater) {
      removeFromWatchLaterHandler(movieId);
      setIsWatchLater(false);
    } else {
      addToWatchLaterHandler(payload);
      setIsWatchLater(true);
    }
  };

  return (
    <Fragment>
      <div>
        <h1>Movie Detail</h1>
        {isValid && <h2>{data.title}</h2>}
        {loading && <Loader />}

        <div
          className={classes.backdrop_container}
          style={{ display: loading ? "none" : "block" }}
        >
          {isValid && (
            <img
              alt="movie_poster"
              className={classes.backdrop}
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              onLoad={imageIsLoaded}
            />
          )}
        </div>

        <div className={classes.add_to_list}>
          <div className={classes.add_favourite} onClick={toggleFavorite}>
            {isFavourite ? <AiIcons.AiFillHeart /> : <AiIcons.AiOutlineHeart />}
          </div>
          <div className={classes.add_watchLater} onClick={toggleWatchLater}>
            {isWatchLater ? <BsIcons.BsSave2Fill /> : <BsIcons.BsSave2 />}
          </div>
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
