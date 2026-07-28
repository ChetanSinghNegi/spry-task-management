import { useDispatch, useSelector } from "react-redux";
import { FILTERS_CONSTANT, ORDER_CONSTANT } from "../utils/constants";
import { changeFilter, changeOrder } from "../store/task-slice";

const TaskFilter = () => {
  const dispatch = useDispatch();
  const storeTasksData = useSelector((state) => {
    return state.task;
  });

  const activeFilter = storeTasksData?.filter || FILTERS_CONSTANT.all;
  const activeOrder = storeTasksData?.order || ORDER_CONSTANT.asc;

  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {Object.values(FILTERS_CONSTANT).map((filter) => {
            const isActive = activeFilter === filter;
            const label =
              filter === FILTERS_CONSTANT.all
                ? "All"
                : filter === FILTERS_CONSTANT.pending
                  ? "Pending"
                  : filter === FILTERS_CONSTANT.inProgress
                    ? "In Progress"
                    : "Completed";

            return (
              <button
                key={filter}
                type="button"
                onClick={() => dispatch(changeFilter(filter))}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-slate-600">
            Sort by due date
          </label>
          <select
            value={activeOrder}
            onChange={(event) => dispatch(changeOrder(event.target.value))}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
          >
            <option value={ORDER_CONSTANT.asc}>Ascending</option>
            <option value={ORDER_CONSTANT.desc}>Descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default TaskFilter;
