import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';
import { useState } from 'react';

const AddTaskForm = ({ columnId }) => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    dispatch(addTask(columnId, content));
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="New task..."
        className="p-2 border rounded w-full"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded w-full">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
