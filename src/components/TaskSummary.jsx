import {
  getStyle,
  STATUS_CONSTANT,
  STATUS_HEADING_CONSTANT,
} from "../utils/constants";

const TaskSummary = (props) => {
  const { tasks } = props;

  const taskIndividualCounts = {
    pending: 0,
    inProgress: 0,
    completed: 0,
  };

  tasks?.forEach((task) => {
    if (task.status === "pending") taskIndividualCounts.pending++;
    else if (task.status === "inProgress") taskIndividualCounts.inProgress++;
    else taskIndividualCounts.completed++;
  });

  return (
    <ul className=" grid gap-4 sm:grid-cols-2 lg:grid-cols-4 my-5">
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-500">Total Tasks</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-800">
          {tasks.length}
        </h2>
      </div>
      {Object.keys(STATUS_CONSTANT).map((status) => {
        const heading = STATUS_HEADING_CONSTANT[status];
        const count = taskIndividualCounts[status];
        const style = getStyle(status);
        return (
          <li
            className={`rounded-xl border ${style} p-5 shadow-sm`}
            key={status}
          >
            <p className="text-sm font-medium ">{heading}</p>
            <h2 className="mt-2 text-3xl font-bold ">{count}</h2>
          </li>
        );
      })}
    </ul>
  );
};
export default TaskSummary;
