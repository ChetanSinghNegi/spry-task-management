import { createSlice } from "@reduxjs/toolkit";

const toasterSlice = createSlice({
  name: "toaster",
  initialState: [],
  reducers: {
    addToaster: (state, action) => {
      const { id, message, type } = action.payload;
      console.log(state, { id, message, type });
      state.push({ id, type, message });
    },
    removeToaster: (state, action) => {
      const id = action.payload;
      const updatedState = state.filter((toaster) => {
        return toaster.id !== id;
      });
      console.log(updatedState, action);
      return updatedState;
    },
  },
});
export const { addToaster, removeToaster } = toasterSlice.actions;
export default toasterSlice.reducer;
