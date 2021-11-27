import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import favouriteSlice from "./favourite-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    favourite: favouriteSlice.reducer,
  },
});

export default store;
