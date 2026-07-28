export const FILTERS_CONSTANT = {
  all: "all",
  pending: "pending",
  inProgress: "inProgress",
  completed: "completed",
};

export const STATUS_CONSTANT = {
  pending: "pending",
  inProgress: "inProgress",
  completed: "completed",
};

export const STATUS_HEADING_CONSTANT = {
  pending: "Pending",
  inProgress: "In Progress",
  completed: "Completed",
};

export const FIELDS_CONSTANT = {
  title: "title",
  description: "description",
  status: "status",
  dueDate: "dueDate",
  createdAt: "createdAt",
};

export const ORDER_CONSTANT = {
  asc: "asc",
  desc: "desc",
};

export const getStyle = (status, property) => {
  switch (status) {
    case "pending":
      if (property === "border") return " border-orange-400";
      if (property === "background") return " bg-orange-400";
      if (property === "text") return " text-orange-800";
      return " border-orange-400 bg-orange-50 text-orange-800";
    case "inProgress":
      if (property === "border") return " border-blue-400";
      if (property === "background") return " bg-blue-400";
      if (property === "text") return " text-blue-800";
      return " border-blue-400 bg-blue-50 text-blue-800";
    case "completed":
      if (property === "border") return " border-green-400";
      if (property === "background") return " bg-green-400";
      if (property === "text") return " text-green-800";
      return " border-green-400 bg-green-50 text-green-800";
    default:
      return "";
  }
};

const getComparableValue = (value) => {
  if (!value) return "";

  const parsedDate = new Date(value);
  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate.getTime();
  }

  return String(value).toLowerCase();
};

export const getVisibleTasks = (
  tasks = [],
  filter = FILTERS_CONSTANT.all,
  sort = FIELDS_CONSTANT.dueDate,
  order = ORDER_CONSTANT.asc,
) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === FILTERS_CONSTANT.all) return true;
    return task.status === filter;
  });

  return [...filteredTasks].sort((leftTask, rightTask) => {
    const leftValue = getComparableValue(leftTask[sort]);
    const rightValue = getComparableValue(rightTask[sort]);

    const comparison =
      leftValue < rightValue ? -1 : leftValue > rightValue ? 1 : 0;

    if (comparison === 0) {
      return String(leftTask.title || "").localeCompare(
        String(rightTask.title || ""),
        undefined,
        { sensitivity: "base" },
      );
    }

    return order === ORDER_CONSTANT.desc ? comparison * -1 : comparison;
  });
};

export const loadTasks = () => {
  const data = localStorage.getItem("taskState");

  if (!data) {
    const defaultData = {
      tasks: [],
      filter: FILTERS_CONSTANT.all,
      sort: FIELDS_CONSTANT.createdAt,
      order: ORDER_CONSTANT.asc,
    };
    return defaultData;
  }

  return JSON.parse(data);
};

export const saveTasks = (state) => {
  localStorage.setItem("taskState", JSON.stringify(state));
};
