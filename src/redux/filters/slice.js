import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;