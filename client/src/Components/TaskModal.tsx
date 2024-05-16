import React, { useState } from 'react';
import axios from 'axios';

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  user: string;
  status: 'in-progress' | 'completed';
}

interface TaskModalProps {
  task: Task;
  onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose }) => {
  const [formData, setFormData] = useState<Task>(task);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8100/api/todo/update/${task._id}`, formData);
      console.log('Task updated successfully:', response.data);
      window.location.reload();
      onClose();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8100/api/todo/delete/${task._id}`);
      console.log('Task deleted successfully:', response.data);
      window.location.reload();
      onClose();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <button onClick={onClose} className="text-red-500 float-right">X</button>
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Task</h2>
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
              value={formData.dueDate?.substring(0, 10)}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            >
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Update Task
          </button>
          <button onClick={handleDelete} className="w-full mt-2 py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600">
           Delete Task
        </button>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
