import React from 'react';
const Banner: React.FC = () => {
    return (
      <div className="bg-black text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Discover TaskBliss</h1>
        <p className="text-xl mb-6">
          Elevate your productivity and achieve more with TaskBliss – where your tasks meet their match.
          Manage your to-do lists effortlessly, set priorities, and reach your goals with our intuitive and powerful task management tool.
        </p>
        <button className="py-3 px-6 text-white bg-cyan-600 font-semibold rounded hover:bg-cyan-200 transition duration-300">
          Get Started
        </button>
      </div>
    );
  };
  
  export default Banner;