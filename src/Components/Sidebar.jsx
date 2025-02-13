// Sidebar.jsx
import React from "react";
import {
  HiHome,
  HiUsers,
  HiPhotograph,
  HiFolder,
  HiCurrencyDollar,
  HiChartBar,
  HiArrowCircleUp,
  HiUserCircle,
  HiCog,
  HiLogout,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md py-8 px-6">
      <div className="mb-8">
        <img src={assets.logo} alt="Logo" className="text-2xl font-bold text-gray-700" />
      </div>
      <nav>
        <ul className="space-y-6">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <HiHome className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <HiUsers className="w-5 h-5" />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/banners"
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <HiPhotograph className="w-5 h-5" />
              <span>Banners</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <HiFolder className="w-5 h-5" />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <HiCurrencyDollar className="w-5 h-5" />
              <span>Transactions</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <HiChartBar className="w-5 h-5" />
              <span>Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/withdrawals"
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <HiArrowCircleUp className="w-5 h-5" />
              <span>Withdrawals</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <HiUserCircle className="w-5 h-5" />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-2 cursor-pointer ${
                  isActive ? "text-yellow-500" : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <HiCog className="w-5 h-5" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl mt-8 w-full flex items-center justify-center">
        <HiLogout className="mr-2" />
        Log Out
      </button>
    </aside>
  );
};

export default Sidebar;