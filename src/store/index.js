import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./slice/stateSlice";
import activeSlice from "./slice/activeSlice";

const combinedReducer = {
  stateSlice: stateSlice,
  active: activeSlice
};

export default configureStore({
  reducer: combinedReducer,
});
