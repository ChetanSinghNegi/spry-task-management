import { useDispatch, useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import {
  FILTERS_CONSTANT,
  FIELDS_CONSTANT,
  ORDER_CONSTANT,
  getVisibleTasks,
} from "../utils/constants";
import {
  changeFilter,
  changeOrder,
  editTask,
  removeTask,
} from "../store/task-slice";
import Modal from "../modal/Modal";
import { useRef, useState } from "react";
import TaskForm from "./add-edit-form/TaskForm";
import TaskSummary from "./TaskSummary";
import TaskFilter from "./TaskFilter";

const TaskList = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const taskRef = useRef(null);

  const storeTasksData = useSelector((state) => {
    return state?.task;
  });

  const visibleTasks = getVisibleTasks(
    storeTasksData?.tasks || [],
    storeTasksData?.filter || FILTERS_CONSTANT.all,
    FIELDS_CONSTANT.dueDate,
    storeTasksData?.order || ORDER_CONSTANT.asc,
  );

  const deleteHandler = (id) => {
    if (!id) return;
    dispatch(removeTask(id));
  };

  const editHandler = (taskId) => {
    const editElementData = storeTasksData?.tasks?.find(
      (task) => task.taskId === taskId,
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
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-sm font-medium text-slate-600">
          No Task Available. Please Create One!
        </div>
      ) : (
        <>
          <TaskSummary tasks={storeTasksData?.tasks} />
          <TaskFilter />
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
