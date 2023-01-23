import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { sliderApi } from "../features/sliderSlice";
import userSlice from "../features/userSlice";

const store = configureStore({
  reducer: {
    userR: userSlice,
    [sliderApi.reducerPath]: sliderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sliderApi.middleware),
});
setupListeners(store.dispatch);

export default store