import  { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can perform additional logic or API calls for authentication
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg p-6">
        <div className="md:w-1/2">
          <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=740&t=st=1684135538~exp=1684136138~hmac=f12ebd7869b30d9bf1b12aae7c819013b8588a516688525ad98586029fcffe18" alt="Login Image" className="h-auto w-full" />
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 ml-3">
          <h2 className="text-2xl mb-4 font-bold">Login</h2>
          {/* <p className="mb-4"></p> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Sign In</button>
            <p className='my-5'> create a new account <Link to={"/register"}><span className='text-blue-800 underline'>register </span></Link> </p>

          </form>
        </div>
      </div>
    
    </div>
  );
};

export default SignInPage;
