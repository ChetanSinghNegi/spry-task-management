import { useDispatch, useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { DUMMY_STORE } from "../utils/constants";
import { removeTask } from "../store/task-slice";

const TaskList = () => {
  const dispatch = useDispatch();
  const storeTasksData = useSelector((state) => {
    return state.taskSlice;
  });
  const deleteHandler = (id) => {
    if (!id) return;
    console.log("RUNNING");
    dispatch(removeTask(id));
  };
  // console.log(storeTasksData);
  // const storeTasksData = DUMMY_STORE;
  return (
    <>
      {!storeTasksData?.tasks || storeTasksData?.tasks?.length <= 0 ? (
        <div className=" flex justify-center items-center">
          No Task Available. Please Create One!
        </div>
      ) : (
        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr ">
          {storeTasksData?.tasks?.map((task) => {
            return (
              <TaskCard
                key={task.taskId}
                task={task}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
export default TaskList;
