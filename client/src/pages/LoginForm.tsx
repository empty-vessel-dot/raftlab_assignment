import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import log from '../assets/log.png'

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginFormData>({ email: '', password: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

   const navigate=useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
        const res = await axios.post("https://taskassignmentrfl-hh4i7bmrq-harsh-sharmas-projects-090105a0.vercel.app/api/auth/login", loginData);
      localStorage.setItem('user',JSON.stringify(res.data))
      setSubmitted(true)
      navigate('/home')
       
      
      } catch (err) {
        console.log(err)
      }
      
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-cyan-200">
      <div className="w-[50%] flex items-center justify-center h-[100%]">   
         <img src={log} alt="" className='w-[80%] h-[70%]' /> 
      </div>
      <div className='w-[50%] flex h-full items-center justify-center'> 
      <div className= "  bg-white p-8 rounded-lg  shadow-black shadow-lg w-full max-w-md right-8 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border-2 border-gray-500 rounded outline-none"
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
              value={loginData.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border-2 border-gray-500 rounded outline-none"
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
            Log In
          </button>
        </form>
       
        {submitted && (
          <div className="mt-4 text-green-500">
            Successfully logged in!
          </div>
        )}
         <div className="mt-4 flex items-center justify-center">
        <h2 className='text-[16px] font-bold'>New User? <Link to="/signup" className='text-red-500'> SignUp Now!</Link></h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
