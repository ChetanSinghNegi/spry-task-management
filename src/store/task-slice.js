import { createSlice } from "@reduxjs/toolkit";
import {
  FILTERS_CONSTANT,
  FIELDS_CONSTANT,
  ORDER_CONSTANT,
} from "../utils/constants";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    filter: FILTERS_CONSTANT.all,
    sort: FIELDS_CONSTANT.createdAt,
    order: ORDER_CONSTANT.asc,
  },
  reducers: {
    addTask: (state, action) => {
      console.log(state, action);
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {},
    removeTask: (state, action) => {
      const updatedFilter = state.tasks.filter(
        (task) => task.taskId != action.payload,
      );
      state.tasks = updatedFilter;
    },
    changeFilter: (state, action) => {},
    changeSort: (state, action) => {},
    changeOrder: (state, action) => {},
  },
});
export const { addTask, editTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
