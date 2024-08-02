import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import AddTaskForm from './AddTaskForm';

const Column = ({ column }) => {
  return (
    <div className="bg-gray-200 rounded p-4 w-64">
      <h2 className="text-xl font-bold mb-4">{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-2"
          >
            {column.taskIds.map((taskId, index) => (
              <Task key={taskId} taskId={taskId} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AddTaskForm columnId={column.id} />
    </div>
  );
};

export default Column;
