import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  callDetails: null,
  step: 1,
};

const igSlice = createSlice({
  name: "interaction guide",
  initialState,
  reducers: {
    setCallDetails: (state, action) => {
      state.callDetails = action.payload.callDetails;
    },

    setStep: (state, action) => {
      state.step = action.payload.step;
    },
  },

  // extraReducers: (builder) => {

  // },
});

export const { setStep, setCallDetails } = igSlice.actions;
export default igSlice.reducer;
