import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import NewTask from '../Components/NewTask';
import axios from 'axios';
import TaskModal from '../Components/TaskModal';
import Footer from '../Components/Footer';

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  user: string;
  status: 'in-progress' | 'completed';
}

const Task: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tasksPerPage] = useState<number>(5);
  const [sortOption, setSortOption] = useState<string>('date');
  const user_id = JSON.parse(localStorage.getItem('user') || '{}')._id || '';

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`https://taskassignmentrfl-hh4i7bmrq-harsh-sharmas-projects-090105a0.vercel.app/api/todo/user/${user_id}`);
        let fetchedTasks = response.data;

        if (sortOption === 'date') {
          fetchedTasks = fetchedTasks.sort((a: Task, b: Task) => new Date(b.dueDate || '').getTime() - new Date(a.dueDate || '').getTime());
        } else if (sortOption === 'priority') {
          const priorityOrder = { 'high': 1, 'medium': 2, 'low': 3 };
          fetchedTasks = fetchedTasks.sort((a: Task, b: Task) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        }

        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [user_id, sortOption]);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen font-serif">
      <Navbar />
      <div className="bg-[#FEFAEA] flex flex-grow flex-col  items-center  p-4">
        <div className="flex justify-between w-full items-center px-20 mb-8">
        <h1 className="text-3xl font-bold flex items-center justify-center ">
           
        Your To-Do List
            <span className="ml-4 text-lg text-gray-600">({tasks.length} tasks)</span>
          </h1>
            <div className="flex items-center ">
              <select
                onChange={handleSortChange}
                value={sortOption}
                className="py-2 px-4 bg-white border border-gray-300 rounded mr-4 shadow-md shadow-black"
              >
                <option value="date">Sort by Date</option>
                <option value="priority">Sort by Priority</option>
              </select>
              <button
                onClick={() => setOpenModal(!openModal)}
                className="py-2 px-4 bg-blue-500 text-white shadow-md shadow-black font-semibold rounded hover:bg-blue-600 transition duration-300"
              >
                Add Task
              </button>
            </div>
        </div>
        <div className="grid shadow-xl shadow-black grid-col-1 mt-8 rounded-lg gap-6 bg-slate-500 w-[80%] p-[10px]">
          {currentTasks.map((task) => (
            <div
              key={task._id}
              className="bg-white p-4 border-2 border-black shadow-md shadow-black rounded-lg w-full flex justify-between items-center px-10  cursor-pointer hover:bg-gray-200 transition duration-300"
              onClick={() => handleTaskClick(task)}
            >
              <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
              <p className={`text-sm ${task.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                {task.status}
              </p>
            </div>
          ))}
        </div>
        {selectedTask && <TaskModal task={selectedTask} onClose={handleCloseModal} />}
        <div className="flex justify-center mt-6">
          {Array.from({ length: Math.ceil(tasks.length / tasksPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`py-2 px-4 mx-1 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer/>
      {openModal && <NewTask setOpen={setOpenModal} />}
    </div>
  );
};

export default Task;
