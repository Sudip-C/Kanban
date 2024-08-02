const initialState = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Do assignment' },
    'task-2': { id: 'task-2', content: 'Go to gym' },
    'task-3': { id: 'task-3', content: 'Task 3' },
    'task-4': { id: 'task-4', content: 'Task 4' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_TASK':
      const { source, destination, draggableId } = action.payload;
      const start = state.columns[source.droppableId];
      const finish = state.columns[destination.droppableId];

      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          taskIds: newTaskIds,
        };

        return {
          ...state,
          columns: {
            ...state.columns,
            [newColumn.id]: newColumn,
          },
        };
      }

      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };

      return {
        ...state,
        columns: {
          ...state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      case 'ADD_TASK': {
        const { columnId, content } = action.payload;
        const newTaskId = `task-${Object.keys(state.tasks).length + 1}`;
        const newTask = { id: newTaskId, content };
  
        const newColumn = {
          ...state.columns[columnId],
          taskIds: [...state.columns[columnId].taskIds, newTaskId],
        };
  
        return {
          ...state,
          tasks: {
            ...state.tasks,
            [newTaskId]: newTask,
          },
          columns: {
            ...state.columns,
            [newColumn.id]: newColumn,
          },
        };
      }
    default:
      return state;
  }
};

export default kanbanReducer;
