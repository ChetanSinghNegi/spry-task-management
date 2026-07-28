import { useDispatch, useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { DUMMY_STORE } from "../utils/constants";
import { editTask, removeTask } from "../store/task-slice";
import Modal from "../modal/Modal";
import { useRef, useState } from "react";
import TaskForm from "../add-edit-form/TaskForm";
import TaskSummary from "./TaskSummary";

const TaskList = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const taskRef = useRef(null);

  const storeTasksData = useSelector((state) => {
    return state.taskSlice;
  });

  const deleteHandler = (id) => {
    if (!id) return;
    dispatch(removeTask(id));
  };

  const editHandler = (taskId) => {
    const editElementData = storeTasksData?.tasks?.find(
      (task) => task.taskId == taskId,
    );
    taskRef.current = editElementData;
    setOpenModal(true);
  };

  const editSubmitHandler = (task) => {
    dispatch(editTask(task));
    closeModal();
  };

  const closeModal = () => {
    setOpenModal(false);
    taskRef.current = null;
  };

  return (
    <>
      {!storeTasksData?.tasks || storeTasksData?.tasks?.length <= 0 ? (
        <div className=" flex justify-center items-center text-xl font-semibold">
          No Task Available. Please Create One!
        </div>
      ) : (
        <>
          <TaskSummary tasks={storeTasksData?.tasks} />
          <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr ">
            {storeTasksData?.tasks?.map((task) => {
              return (
                <TaskCard
                  key={task.taskId}
                  task={task}
                  deleteHandler={deleteHandler}
                  editHandler={editHandler}
                />
              );
            })}
          </ul>
        </>
      )}
      <Modal openModal={openModal} closeModal={closeModal}>
        <TaskForm
          onSubmit={editSubmitHandler}
          initialData={taskRef.current}
          onCancel={closeModal}
        />
      </Modal>
    </>
  );
};
export default TaskList;
