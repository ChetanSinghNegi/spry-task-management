import { Outlet } from "react-router";
import Header from "./Header";
import Toaster from "../toaster/Toaster";

const TaskManager = () => {
  return (
    <>
      <Header />
      <Toaster alignment={"left"} />
      <Outlet />
    </>
  );
};
export default TaskManager;
