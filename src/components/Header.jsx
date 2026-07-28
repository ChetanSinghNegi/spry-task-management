import { useState } from "react";
import TaskForm from "../add-edit-form/TaskForm";
import Modal from "../modal/Modal";
import { addTask } from "../store/task-slice";
import { useDispatch } from "react-redux";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (taskData) => {
    const updatedTask = { ...taskData };
    dispatch(addTask(updatedTask));
    setOpenModal(false);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <header className="flex justify-between">
        <h1 className=" text-2xl font-bold font-mono p-2">Task Manager</h1>
        <button
          className=" border-2 p-2 text-xl font-bold font-mono cursor-pointer hover:border-red-300"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Create New
        </button>
      </header>
      <Modal openModal={openModal} closeModal={closeModal}>
        <TaskForm onSubmit={onSubmit} onCancel={closeModal} />
      </Modal>
    </>
  );
};
export default Header;
