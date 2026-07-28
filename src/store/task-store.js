import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task-slice";
import toasterSlice from "./toaster-slice";
import { saveTasks } from "../utils/constants";

const taskStore = configureStore({
  reducer: {
    task: taskSlice,
    toaster: toasterSlice,
  },
});

let previousTaskState = taskStore.getState().task;

taskStore.subscribe(() => {
  const currentTaskState = taskStore.getState().task;

  if (currentTaskState !== previousTaskState) {
    saveTasks(currentTaskState);
    previousTaskState = currentTaskState;
  }
});

export default taskStore;
