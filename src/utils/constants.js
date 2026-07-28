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
      if (property == "border") return " border-orange-400";
      else if (property == "background") return " bg-orange-400";
      else if (property == "text") return " text-orange-800";
      else return " border-orange-400 bg-orange-50 text-orange-800";
      break;
    case "inProgress":
      if (property == "border") return " border-blue-400";
      else if (property == "background") return " bg-blue-400";
      else if (property == "text") return " text-blue-800";
      else return "  border-blue-400 bg-blue-50 text-blue-800";
      break;
    case "completed":
      if (property == "border") return " border-green-400";
      else if (property == "background") return " bg-green-400";
      else if (property == "text") return " text-green-800";
      else return " border-green-400 bg-green-50 text-green-800";
      break;
    default:
      break;
  }
};

export const DUMMY_STORE = {
  tasks: [
    {
      id: 1,
      title: "test1",
      description: "description1",
      status: "pending",
      dueDate: "1apr",
      timestamp: "1apr",
    },
    {
      id: 2,
      title: "test2",
      description:
        "This is the recommended Redux pattern: keep the minimum state in the store (tasks, current filter, current sort) and compute the displayed list using selectors.",
      status: "inProgress",
      dueDate: "1apr",
      timestamp: "1apr",
    },
    {
      id: 3,
      title: "test3",
      description: "description3",
      status: "completed",
      dueDate: "1apr",
      timestamp: "1apr",
    },
  ],
  filter: FILTERS_CONSTANT.all,
  sort: FIELDS_CONSTANT.createdAt,
  order: ORDER_CONSTANT.asc,
};

// {
//   (id, title, description, status, dueDate, createdAt);
// }
