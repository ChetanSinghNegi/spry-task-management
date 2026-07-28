import { useDispatch, useSelector } from "react-redux";
import {
  FIELDS_CONSTANT,
  FILTERS_CONSTANT,
  getVisibleTasks,
  ORDER_CONSTANT,
} from "../utils/constants";
import { useRef, useState } from "react";
import { editTask, removeTask } from "../store/task-slice";
import TaskCard from "./TaskCard";
import Modal from "../modal/Modal";
import TaskForm from "./add-edit-form/TaskForm";

const CompletedTaskList = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const taskRef = useRef(null);

  const storeTasksData = useSelector((state) => {
    return state?.task;
  });

  const deleteHandler = (id) => {
    try {
      if (!id) return;
      dispatch(removeTask(id));
    } catch (err) {
      console.log("ERROR: " + err);
    }
  };

  const editHandler = (taskId) => {
    const editElementData = storeTasksData?.tasks?.find(
      (task) => task.taskId === taskId,
    );
    taskRef.current = editElementData;
    setOpenModal(true);
  };

  const editSubmitHandler = (task) => {
    try {
      dispatch(editTask(task));
      closeModal();
    } catch (err) {
      console.log("ERROR: " + err);
    }
  };

  const visibleTasks = getVisibleTasks(
    storeTasksData?.tasks || [],
    FILTERS_CONSTANT.completed,
    FIELDS_CONSTANT.dueDate,
    ORDER_CONSTANT.asc,
  );

  const closeModal = () => {
    setOpenModal(false);
    taskRef.current = null;
  };

  return (
    <>
      {visibleTasks?.length <= 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-sm font-medium text-slate-600">
          No tasks match the selected filter.
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-6 auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
          {visibleTasks?.map((task) => {
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
export default CompletedTaskList;
