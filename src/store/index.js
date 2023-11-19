import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./slice/stateSlice";

const combinedReducer = {
  state: stateSlice
};

export default configureStore({
  reducer: combinedReducer,
});
