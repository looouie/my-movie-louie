import classes from "./MovieItem.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { favouriteActions } from "../../store/favourite-slice";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { watchLaterActions } from "../../store/watchLater-slice";

const imagePrefix = "https://image.tmdb.org/t/p/original/";

const MovieItem = (props) => {
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);
  const [isWatchList, setIsWatchList] = useState(false);

  const {
    id,
    title,
    posterPath,
    favourited,
    watchLater,
    onLoad = () => {},
  } = props;

  const payload = {
    id,
    title,
    posterPath,
  };

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    if (favourited) {
      setIsFavourite(true);
    }

    if (watchLater) {
      setIsWatchList(true);
    }
  }, [favourited, watchLater]);

  const addToFavouriteHandler = (payload) => {
    dispatch(favouriteActions.addToFavouriteList(payload));
  };
  const removeFromFavouriteHandler = (id) => {
    dispatch(favouriteActions.removeFavouriteFromList(id));
  };

  const toggleFavorite = () => {
    if (isFavourite) {
      removeFromFavouriteHandler(id);
      setIsFavourite(false);
    } else {
      addToFavouriteHandler(payload);
      setIsFavourite(true);
    }
  };

  const addToWatchLaterHandler = (payload) => {
    dispatch(watchLaterActions.addToWatchLaterList(payload));
  };
  const removeFromWatchLaterHandler = (id) => {
    dispatch(watchLaterActions.removeWatchLaterFromList(id));
  };

  const toggleWatchLater = () => {
    if (isWatchList) {
      removeFromWatchLaterHandler(id);
      setIsWatchList(false);
    } else {
      addToWatchLaterHandler(payload);
      setIsWatchList(true);
    }
  };

  return (
    <div className={classes.card}>
      <div>
        <div className={classes.add_to_list}>
          <div className={classes.add_favourite} onClick={toggleFavorite}>
            {isFavourite ? <AiIcons.AiFillHeart /> : <AiIcons.AiOutlineHeart />}
          </div>
          <div className={classes.add_waterLater} onClick={toggleWatchLater}>
            {isWatchList ? <BsIcons.BsSave2Fill /> : <BsIcons.BsSave2 />}
          </div>
        </div>
        <img
          className={classes.poster}
          // src={`https://image.tmdb.org/t/p/original${props.posterPath}`}
          src={`${imagePrefix}${posterPath}`}
          alt="poster"
        />
      </div>

      <NavLink className={classes.link} to={`/movie/${id}`}>
        <div className={classes.description}>{title}</div>
      </NavLink>
    </div>
  );
};

export default MovieItem;
