import React, { useState } from 'react';
import assets from '../assets/assets';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center">
      <div className="bg-white m-4 p-8 rounded-lg shadow-md w-full max-w-md md:max-w-2xl lg:max-w-2xl flex flex-col md:flex-row justify-between items-center">
        <div className="w-50 lg:w-60 mb-8 md:mb-0">
          <img src={assets.dashboard} alt="Login" className="w-40 md:w-full lg:w-full h-auto" />
        </div>
        <div className="w-full md:w-96">
          <div className="flex justify-center mb-6">
            <img src={assets.logo} alt="Logo" className="h-12" />
          </div>
          <h2 className="text-xl font-bold text-center flex justify-start mx-6 text-yellow-400 mb-2">
            SIGN IN
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Welcome! Sign in with your admin account.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="#" className="text-sm text-yellow-500 hover:underline block mt-2">
                Forgot Password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;