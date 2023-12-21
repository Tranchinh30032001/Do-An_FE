import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
  name: "active",
  initialState: {
    qlActive: "Trang Chủ",
    addSuccess: false,
    hoiThaoActive: {}
  },
  reducers: {
    setActive: (state, action) => {
     state.qlActive = action.payload
    },

    setAddSuccess: (state, action) => {
      state.addSuccess = action.payload
    },

    setHoiThaoActive: (state, action) => {
      state.hoiThaoActive = action.payload
    }
  }
});

export const { setActive, setAddSuccess, setHoiThaoActive } = activeSlice.actions;

export default activeSlice.reducer;
