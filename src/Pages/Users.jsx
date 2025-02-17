import React, { useState } from "react";
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
  HiSearch,
  HiUser,
  HiMenu,
  HiX,
} from "react-icons/hi";
import assets from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const UsersPanel = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar
  const navigate = useNavigate();

  const userStats = [
    { label: "Total Users", count: "15,091", color: "bg-yellow-200 text-yellow-700" },
    { label: "Live Users", count: "157", color: "bg-green-200 text-green-700" },
    { label: "Blocked Users", count: "65", color: "bg-red-200 text-red-700" },
  ];

  const userList = [
    { id: "26546588", name: "Jakob Torff", email: "swalke3r@gmail.com", location: "Rajasthan, Jodhpur", status: "Active", type: "Influencer" },
    { id: "468453335", name: "Ruben Donin", email: "jgona3lez@aol.com", location: "Haryana, Rohtak", status: "Blocked", type: "Brand" },
    { id: "1513231241", name: "Gustavo Stanton", email: "ibro3wn@gmail.com", location: "Bihar, Patna", status: "Offline", type: "Influencer" },
    { id: "1213235457", name: "Zain Vaccaro", email: "llopez@outlook.com", location: "Maharashtra, Mumbai", status: "Offline", type: "Brand" },
    { id: "1546738463", name: "Jakob Schleifer", email: "dflo3res@yahoo.com", location: "Utter Pradesh, Agra", status: "Active", type: "Brand" },
    { id: "468453353", name: "Ruben Donin", email: "jgona3lez@aol.com", location: "Haryana, Rohtak", status: "Blocked", type: "Brand" },
    { id: "151321249", name: "Gustavo Stanton", email: "ibr3owvn@gmail.com", location: "Bihar, Patna", status: "Offline", type: "Influencer" },
    { id: "121325459", name: "Zain Vaccaro", email: "llo3pvez@outlook.com", location: "Maharashtra, Mumbai", status: "Offline", type: "Brand" },
    { id: "154678469", name: "Jakob Schleifer", email: "df3lorves@yahoo.com", location: "Utter Pradesh, Agra", status: "Active", type: "Brand" },
  ];

  const filteredUsers = userList.filter(
    (user) =>
      (activeTab === "All" || user.type === activeTab) &&
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  )
  );

  const handleViewClick = (userId) => {
    navigate(`/userprofile/${userId}`)
  };

  return (
    <div className="flex min-h-screen bg-gray-200 w-screen">
      {/* Hamburger Button (Mobile) */}
      <button
        className="absolute top-4 left-4 md:hidden z-50 bg-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md py-8 px-6 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block z-40`}
      >
        <div className="mb-8">
          <img src={assets.logo} alt="logo" className="text-2xl ml-8 font-bold text-gray-700" />
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
            {/* <li>
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
            </li> */}
          </ul>
        </nav>
        <button className="bg-red-500 md:mt-90 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl mt-8 w-full flex items-center justify-center">
          <HiLogout className="mr-2" />
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-200">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl ml-8 md:ml-0 font-bold text-yellow-500"> Users Panel</h1>
          <div className="flex items-center gap-4">
            <img src={assets.profile} alt="Profile" className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover" />
            <h2 className="text-lg font-semibold text-gray-700">Admin</h2>
          </div>
          
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <div key={index} className={`p-4 ${stat.color} shadow-md rounded-2xl text-center`}>
              <h2 className="text-lg font-semibold">{stat.label}</h2>
              <p className="text-2xl md:text-3xl font-bold">{stat.count}</p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex gap-4">
            {['All', 'Influencers', 'Brands'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md font-semibold ${
                  activeTab === tab ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <HiSearch className="absolute top-2 left-3 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search User"
              className="pl-10 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white shadow-md rounded-2xl p-6 overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-yellow-400 h-[70px] text-left text-gray-800">
                <th className="p-2">Unique ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>State & City</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-2 text-gray-600">{user.id}</td>
                  <td className="flex m-2 items-center gap-2">
                    <HiUser className="w-6 h-6  text-gray-500" />
                    {user.name}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.location}</td>
                  <td className={`font-bold ${user.status === 'Blocked' ? 'text-red-500' : user.status === 'Active' ? 'text-green-500' : 'text-gray-500'}`}>
                    {user.status}
                  </td>
                  <td>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white m-1 py-2 gap-2 px-3 rounded-md mr-2"
                      onClick={() => handleViewClick(user.id)}
                    >
                      View
                    </button>
                    {user.status === 'Blocked' ? (
                      <button className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 m-1 rounded-md">Unblock</button>
                    ) : (
                      <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 m-1 rounded-md">Block</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPanel;