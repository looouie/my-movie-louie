import { createSlice } from "@reduxjs/toolkit";

const watchLaterSlice = createSlice({
  name: "watchLaterList",
  initialState: {
    watchLater: [],
    NumberOfWatchLater: 0,
  },
  reducers: {
    addToWatchLaterList(state, action) {
      const newMovie = action.payload;
      const movieExisted = state.watchLater.find(
        (movie) => movie.id === newMovie.id
      );
      if (!movieExisted) {
        return state.watchLater.push({
          movieId: newMovie.id,
          movieName: newMovie.name,
        });
      } else {
        return state.watchLater;
      }
    },
  },
});
