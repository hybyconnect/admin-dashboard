import React, { useState } from "react";
import { HiHome, HiUsers, HiPhotograph, HiFolder, HiCurrencyDollar, HiChartBar, HiArrowCircleUp, HiUserCircle, HiCog, HiLogout, HiMenu,HiTrash, HiX } from "react-icons/hi";
import assets from "../assets/assets"; // Assuming assets are imported from the same location
import { NavLink } from "react-router-dom";

const projects = [
  { id: 1, project: assets.banner, brand: "Nyaka", creator: "Dhinchak Pooja", interactions: "10,144", date: "24-Jan-2025", budget: "10k", status: "Remove" },
  { id: 2, project: assets.banner2, brand: "Nike", creator: "Purav Jha", interactions: "1,244", date: "24-Jan-2025", budget: "20k", status: "Active" },
  { id: 3, project: assets.banner3, brand: "HP", creator: "Hyby", interactions: "24,997", date: "23-Jan-2025", budget: "50k", status: "Active" },
  { id: 4, project: assets.banner4, brand: "Blur India", creator: "Jasmine", interactions: "6,32,878", date: "16-Jan-2025", budget: "20k", status: "Remove" },
  { id: 5, project: assets.banner5, brand: "Tencent", creator: "Total Gaming", interactions: "98,245", date: "15-Jan-2025", budget: "1 lakh", status: "Remove" },
  { id: 6, project: assets.banner6, brand: "Music Factory", creator: "Mashoom Sharma", interactions: "78,490", date: "14-Jan-2025", budget: "5 lakhs", status: "Active" },
  { id: 7, project: assets.banner7, brand: "Tvs", creator: "Rahul Yadav", interactions: "675", date: "13-Jan-2025", budget: "80k", status: "Active" },
];



const Projects = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('Recent');

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
};

  return (
    <div className="flex min-h-screen bg-gray-100">
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
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block`}
      >
        <div className="mb-8">
          <img src={assets.logo} alt="hyby logo" className="text-2xl ml-8 md:ml-0 font-bold text-gray-700" />
        </div>
        <nav>
          <ul className="space-y-6">
            {/* Dashboard Link */}
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
        {/* Header */}
        <div className="mb-8 flex flex-row md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-3xl font-bold ml-8 md:ml-0 text-yellow-500">Projects</h1>
            <div className="flex items-center gap-4">
            <img src={assets.profile} alt="Profile" className="w-10 h-10 md:w-20 md:h-20 rounded-full object-cover" />
            <h2 className="text-lg font-semibold text-gray-700">Admin</h2>
          </div>
        </div>
        <div className="mb-4 flex overflow-x-auto justify-between space-x-4 pb-2">
          <button
            className={`px-4 py-2 font-bold rounded-xl whitespace-nowrap ${
              "All" === "All" ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            All ({projects.length})
          </button>
          <select
                value={dropdownValue}
                onChange={handleDropdownChange}
                className=" ml-8 md:ml-0 border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
                <option value="Recent">Recent</option>
                <option value="Week">This Week</option>
                <option value="Month">This Month</option>
                <option value="Year">This Year</option>
            </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full bg-white shadow-md rounded-2xl">
            <thead>
              <tr className="bg-yellow-400 text-white">
                <th className="p-4">S.No</th>
                <th>Project</th>
                <th>Brand Name</th>
                <th>Creator Name</th>
                <th>Interactions</th>
                <th>Date</th>
                <th>Budget</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((tx, index) => (
                <tr key={tx.id} className="border-b text-center">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-0 lg:p-4 m-1">
                    <img src={tx.project} alt={`Project ${tx.brand}`} className="w-50 h-20 object-cover rounded-lg" />
                  </td>
                  <td className="p-4">{tx.brand}</td>
                  <td className="p-4">{tx.creator}</td>
                  <td className="p-4">{tx.interactions}</td>
                  <td className="p-4">{tx.date}</td>
                  <td className="p-4">{tx.budget}</td>
                  <td className="p-4">
                    {tx.status === "Active" ? (
                      <button className="bg-green-500 text-white font-bold py-1 px-3 cursor-pointer rounded">Active</button>
                    ) : (
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold cursor-pointer py-1 px-3 rounded">Remove</button>
                    )}
                    <button className=" mt-1  text-white font-bold py-1 cursor-pointer px-4 rounded"><HiTrash className="text-2xl hover:text-red-800 text-red-500" /></button>
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

export default Projects;