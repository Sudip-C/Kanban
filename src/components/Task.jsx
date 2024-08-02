import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

const Task = ({ taskId, index }) => {
  const task = useSelector((state) => state.kanban.tasks[taskId]);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-2 rounded shadow"
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
