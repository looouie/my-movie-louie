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
      state.list.push({ id: newMovie });
      state.totalMovies++;
    },
    removeFavouriteFromList(state, action) {
      const idTobeRemoved = action.payload;
      state.list = state.list.filter((item) => item.id !== idTobeRemoved);

      state.totalMovies--;
    },
  },
});

export const favouriteActions = favouriteSlice.actions;

export default favouriteSlice;
