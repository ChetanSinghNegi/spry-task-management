import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { getStyle } from "../utils/constants";

const TaskCard = (props) => {
  const {
    taskId = null,
    title = "",
    description = "",
    status = "",
    dueDate = "",
  } = props?.task;
  const [elementHovered, setElementHovered] = useState({});

  return (
    <li className="h-full p-4 relative">
      <div
        className="absolute left-6 top-5 z-50 cursor-pointer"
        onClick={() => {
          props?.editHandler(taskId);
        }}
        onMouseEnter={() =>
          setElementHovered((prev) => {
            return { ...prev, editElement: true };
          })
        }
        onMouseLeave={() =>
          setElementHovered((prev) => {
            return { ...prev, editElement: false };
          })
        }
      >
        <FaEdit
          size={elementHovered.editElement ? 20 : 18}
          color={elementHovered.editElement ? "blue" : "black"}
        />
      </div>
      <div
        className="absolute right-5 top-5 z-50 cursor-pointer"
        onClick={() => {
          props?.deleteHandler(taskId);
        }}
        onMouseEnter={() =>
          setElementHovered((prev) => {
            return { ...prev, deleteElement: true };
          })
        }
        onMouseLeave={() =>
          setElementHovered((prev) => {
            return { ...prev, deleteElement: false };
          })
        }
      >
        <MdDeleteForever
          size={elementHovered.deleteElement ? 23 : 20}
          color={elementHovered.deleteElement ? "red" : "black"}
        />
      </div>

      <div
        className={`h-full relative rounded-md border-2 ${getStyle(status, "border")} p-4 shadow-sm sm:p-6 flex flex-col`}
      >
        <div className="  border-b border-slate-200 pt-3 pb-2 text-center">
          <span className=" text-slate-800 text-xl font-bold font-serif text-pretty ">
            {title}
          </span>
        </div>

        <p className="text-sm font-[cursive] text-pretty text-gray-700 max-h-20 overflow-auto flex-1">
          {description}
        </p>
        <div className="  font-mono flex justify-between items-center ">
          <div className="text-gray-700 text-xs">{dueDate}</div>
          <div className={` p-1 rounded-md ${getStyle(status)}`}>{status}</div>
        </div>
      </div>
    </li>
  );
};
export default TaskCard;
