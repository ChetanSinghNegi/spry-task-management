import { useState } from "react";
import TaskForm from "./add-edit-form/TaskForm";
import Modal from "../modal/Modal";
import { addTask } from "../store/task-slice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (taskData) => {
    try {
      const updatedTask = { ...taskData };
      dispatch(addTask(updatedTask));
      setOpenModal(false);
    } catch (err) {
      //Note: Error State Settlements
      console.log("Something went Wrong in Submitting");
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <header className="flex justify-between">
        <NavLink
          className=" text-lg md:text-2xl font-semibold font-mono p-2"
          to={"/"}
        >
          Task Manager
        </NavLink>
        <div className="flex gap-2">
          <NavLink
            className=" border-2 p-2 text-md md:text-2xl font-semibold md:font-semibold font-mono cursor-pointer hover:border-red-300"
            to={"/"}
          >
            All Tasks
          </NavLink>
          <NavLink
            className=" border-2 p-2 text-md md:text-2xl font-semibold md:font-semibold font-mono cursor-pointer hover:border-red-300"
            to={"/completed"}
          >
            Completed Tasks
          </NavLink>
          <button
            className=" border-2 p-2 text-md md:text-2xl font-semibold md:font-semibold font-mono cursor-pointer hover:border-red-300"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Create New
          </button>
        </div>
      </header>
      <Modal openModal={openModal} closeModal={closeModal}>
        <TaskForm onSubmit={onSubmit} onCancel={closeModal} />
      </Modal>
    </>
  );
};
export default Header;
