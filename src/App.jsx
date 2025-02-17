import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import assets from "./assets/assets";
import Dashboard from "./Pages/Dashboard";


import Users from "./Pages/Users";
import Test from "./Pages/Test";

import UserProfile from "./Pages/UserProfile";
import BannerPage from "./Pages/BannerPage";
import Transactions from "./Pages/Transactions";
import Projects from "./Pages/Projects";
import Report from "./Pages/Report";
import Withdrawals from "./Pages/Withdrawals";
import Profile from "./Pages/Profile";
import Setting from "./Pages/Setting";



// LoadingScreen Component: Displayed while the app is loading
const LoadingScreen = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-100">
      {/* Logo */}
      <img
        src={assets.hyby}
        alt="Logo"
        className="w-52 mb-8 object-cover ml-2"
      />
      {/* Loading Animation (Bouncing dots) */}
      <div className="flex items-center justify-center space-x-2 w-full">
        <span className="dot w-4 h-4 rounded-full bg-yellow-500 animate-bounce"></span>
        <span
          className="dot w-4 h-4 rounded-full bg-gray-500 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="dot w-4 h-4 rounded-full bg-yellow-500 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 3 seconds
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          {/* Define all Routes here */}
          
          <Route path="/" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<Test />} />
          <Route path="/users" element={<Users />} />
          <Route path="/userprofile/26546588" element={<UserProfile />} />

          <Route path="/banners" element={<BannerPage />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/withdrawals" element={<Withdrawals />} />
          <Route path = "/profile" element = {<Profile />} />
          <Route path="/settings" element={<Setting />} />
          

        </Routes>
      )}
    </>
  );
};

export default App;
