import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md bg-white rounded-lg shadow-lg px-6 py-8">
        <h1 className="text-2xl font-bold mb-4">Welcome Back</h1>
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-4">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1684137431~exp=1684138031~hmac=900df7c3afcd56237fadd53d3c704300f1e0751334caa17a0e5e20ca39690b8b" 
              alt="User"
              className="rounded-full h-16 w-16 object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold">John Doe</h2>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to={'/editprofile'}> <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-3">
            Edit Profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
