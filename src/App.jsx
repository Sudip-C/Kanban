import KanbanBoard from './components/KanbanBoard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-400 p-8  flex flex-col items-center justify-center">
      <h1 className="text-6xl  bg-black text-white font-bold mb-8">Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;
