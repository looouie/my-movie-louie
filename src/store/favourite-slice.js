import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favouriteList",
  initialState: {
    list: [],
    totalMovies: 0,
  },
  reducers: {
    addToFavouriteList(state, action) {
      const newMovie = action.payload;
      state.list.push({
        id: newMovie.id,
        title: newMovie.title,
        posterPath: newMovie.posterPath,
      });
      state.totalMovies++;
    },
    removeFavouriteFromList(state, action) {
      const itemTobeRemoved = action.payload;
      state.list = state.list.filter((item) => item.id !== itemTobeRemoved);
      state.totalMovies--;
    },
  },
});

export const favouriteActions = favouriteSlice.actions;

export default favouriteSlice;
