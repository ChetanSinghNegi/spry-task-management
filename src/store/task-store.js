import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task-slice";

const taskStore = configureStore({
  reducer: { taskSlice },
});
export default taskStore;
