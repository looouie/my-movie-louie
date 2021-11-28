import classes from "./MovieItem.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { favouriteActions } from "../../store/favourite-slice";
import * as AiIcons from "react-icons/ai";

const imagePrefix = "https://image.tmdb.org/t/p/original";

const MovieItem = (props) => {
  const dispatch = useDispatch();

  const [isFavourite, setIsFavourite] = useState(false);

  const { id, favourited } = props;

  const payload = {
    id: props.id,
    title: props.title,
    posterPath: props.posterPath,
  };

  useEffect(() => {
    if (favourited) {
      setIsFavourite(true);
    }
  }, [favourited]);

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

  return (
    <div className={classes.card}>
      <div>
        <div className={classes.add_wishlist}>
          <div className={classes.add_action} onClick={toggleFavorite}>
            {isFavourite ? <AiIcons.AiFillHeart /> : <AiIcons.AiOutlineHeart />}
          </div>
        </div>
        <img
          className={classes.poster}
          // src={`https://image.tmdb.org/t/p/original${props.posterPath}`}
          src={`${imagePrefix}${props.posterPath}`}
          alt="poster"
        />
      </div>

      <NavLink className={classes.link} to={`/movie/${props.id}`}>
        <div className={classes.description}>{props.title}</div>
      </NavLink>
    </div>
  );
};

export default MovieItem;
