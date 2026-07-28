import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task-slice";
import { saveTasks } from "../utils/constants";

const taskStore = configureStore({
  reducer: {
    task: taskSlice,
  },
});

taskStore.subscribe(() => {
  saveTasks(taskStore.getState().task);
});

export default taskStore;
