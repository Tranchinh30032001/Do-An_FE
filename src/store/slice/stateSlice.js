import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "state",
  initialState: {
    bodyType: "",
    isOpen: false,
    title: "",
  },
  reducers: {
    setState: (state, action) => {
      state.bodyType = action.payload.bodyType;
      state.isOpen = action.payload.isOpen;
      state.title = action.payload.title;
    },

    setClose: (state) => {
        state.bodyType = "",
        state.isOpen = false,
        state.title = ""
    }
  }
});

export const { setState, setClose } = stateSlice.actions;

export default stateSlice.reducer;
