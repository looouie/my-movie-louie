import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import favouriteSlice from "./favourite-slice";
import watchLaterSlice from "./watchLater-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    favourite: favouriteSlice.reducer,
    watchLater: watchLaterSlice.reducer,
  },
});

export default store;
