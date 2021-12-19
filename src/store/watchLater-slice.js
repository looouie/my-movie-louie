import { createSlice } from "@reduxjs/toolkit";

const watchLaterSlice = createSlice({
  name: "watchLaterList",
  initialState: {
    list: [],
    totalMovies: 0,
  },
  reducers: {
    addToWatchLaterList(state, action) {
      const newMovie = action.payload;
      state.list.push({
        id: newMovie.id,
        title: newMovie.title,
        posterPath: newMovie.posterPath,
      });
      state.totalMovies++;
    },
    removeWatchLaterFromList(state, action) {
      const itemTobeRemoved = action.payload;
      state.list = state.list.filter((item) => item.id !== itemTobeRemoved);
      state.totalMovies--;
    },
    removeAllWatchLater(state) {
      state.list = [];
      state.totalMovies = 0;
    },
  },
});

export const watchLaterActions = watchLaterSlice.actions;

export default watchLaterSlice;
