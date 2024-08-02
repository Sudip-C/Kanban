export const addTask = (columnId, content) => ({
    type: 'ADD_TASK',
    payload: {
      columnId,
      content,
    },
  });
  