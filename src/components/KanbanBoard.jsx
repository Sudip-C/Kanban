import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const KanbanBoard = () => {
  const dispatch = useDispatch();
  const { columns, columnOrder } = useSelector((state) => state.kanban);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dispatch({
      type: 'MOVE_TASK',
      payload: {
        source,
        destination,
        draggableId,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex space-x-4 p-4">
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          return <Column key={column.id} column={column} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
