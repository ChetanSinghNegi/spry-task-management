export const FILTERS_CONSTANT = {
  all: "All",
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
