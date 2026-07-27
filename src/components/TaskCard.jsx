import { useCallback, useState } from "react";
import { FILTERS_CONSTANT } from "../utils/constants";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TaskCard = (props) => {
  const {
    taskId = null,
    title = "",
    description = "",
    status = "",
    dueDate = "",
    timestamp = "",
  } = props?.task;
  const [deleteHovered, setDeleteHovered] = useState(false);

  const getStyle = useCallback((property) => {
    switch (status) {
      case "pending":
        if (property == "border") return " border-orange-400";
        else return " bg-orange-400";
        break;
      case "inProgress":
        if (property == "border") return " border-yellow-400";
        else return " bg-yellow-400";
        break;
      case "completed":
        if (property == "border") return " border-green-400";
        else return " bg-green-400";
        break;
      default:
        break;
    }
  }, []);
  console.log({ deleteHovered });
  return (
    <li className="h-full p-4 relative">
      <div className="absolute left-6 top-5">
        <FaEdit />
      </div>
      <div
        className="absolute right-5 top-5 z-50 cursor-pointer"
        onClick={() => {
          props?.deleteHandler(taskId);
        }}
      >
        <MdDeleteForever
          onMouseEnter={() => setDeleteHovered(true)}
          onMouseLeave={() => setDeleteHovered(false)}
          size={18}
          color={deleteHovered ? "red" : "black"}
        />
      </div>

      <div
        className={`h-full relative rounded-md border-2 ${getStyle("border")} p-4 shadow-sm sm:p-6 flex flex-col`}
      >
        <div className="  border-b border-slate-200 pt-3 pb-2 text-center">
          <span className=" text-slate-800 text-xl font-bold font-serif text-pretty ">
            {title}
          </span>
        </div>

        <p className="text-sm font-[cursive] text-pretty text-gray-700 max-h-36 overflow-auto flex-1">
          {description}
        </p>
        <div className="  font-mono flex justify-between items-center ">
          <div className="text-gray-700 text-xs">{dueDate}</div>
          <div className={` p-1 rounded-md ${getStyle()}`}>{status}</div>
        </div>
      </div>
    </li>
  );
};
export default TaskCard;
