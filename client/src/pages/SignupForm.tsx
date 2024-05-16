import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import log from '../assets/log.png'

interface FormData {
  username: string;
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
 const navigate=useNavigate();
  const [formData, setFormData] = useState<FormData>({ username: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {

       
        const response=await axios.post("http://localhost:8100/api/auth/register", formData);
        console.log(response)
        
        navigate('/');
        setSubmitted(true);

    } catch (error) {
        console.error('Error registering user:', error);
        
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-200">
        <div className="w-[50%] flex items-center justify-center h-[100%]">   
         <img src={log} alt="" className='w-[100%] h-[100%]' /> 
      </div>
      <div className='w-[50%] flex h-full items-center justify-center'>
      <div className="bg-white p-8 rounded-lg shadow-lg shadow-black w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border-2 outline-none border-gray-500 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border-2 outline-none border-gray-500 rounded"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border-2 outline-none border-gray-500 rounded"
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Sign Up
          </button>

        </form>
        <div className="mt-4 flex items-center justify-center">
        <h2 className='text-[16px] font-bold'>Already have an Account? <a href='/' className='text-red-500'> Login!</a></h2>
        </div>
        {submitted && (
          <div className="mt-4 text-green-500">
            Thank you for signing up!
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default SignupForm;
