import React, { useState } from 'react';
import axios from 'axios';

interface NewTaskProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface TaskFormData {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  user: string;
  status: 'in-progress';
}

const NewTask: React.FC<NewTaskProps> = ({ setOpen }) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    priority: 'low',
    dueDate: '',
    user: JSON.parse(localStorage.getItem('user') || '{}')._id || '', // Assuming user ID will be filled in
    status: 'in-progress'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    console.log(formData)
    e.preventDefault();
    try{
    const response = await axios.post("http://localhost:8100/api/todo/create-todo",formData);
    console.log(response)
    alert("Task Added successfully");
    window.location.reload();

    setOpen(false);
  } catch (error) {
    console.error("Error creating agreement:", error);
    
  }
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <button onClick={() => setOpen(false)} className="text-red-500 float-right">X</button>
        <h2 className="text-2xl font-bold mb-4 text-center">Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewTask;
