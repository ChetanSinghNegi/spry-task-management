import { Outlet } from "react-router";
import Header from "./Header";

const TaskManager = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default TaskManager;
