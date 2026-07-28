import { createSlice } from "@reduxjs/toolkit";
import {
  FILTERS_CONSTANT,
  FIELDS_CONSTANT,
  ORDER_CONSTANT,
  loadTasks,
} from "../utils/constants";

const savedState = loadTasks();
const taskSlice = createSlice({
  name: "task",
  initialState: savedState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.taskId === action.payload.taskId) return action.payload;
        return task;
      });
      state.tasks = updatedTasks;
    },
    removeTask: (state, action) => {
      const updatedFilter = state.tasks.filter(
        (task) => task.taskId !== action.payload,
      );
      state.tasks = updatedFilter;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
    changeOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});
export const {
  addTask,
  editTask,
  removeTask,
  changeFilter,
  changeOrder,
  changeSort,
} = taskSlice.actions;
export default taskSlice.reducer;
