import React, { useState } from "react";
import { HiHome, HiUsers, HiPhotograph, HiFolder, HiCurrencyDollar, HiChartBar, HiArrowCircleUp, HiUserCircle, HiCog, HiLogout, HiMenu, HiX } from "react-icons/hi";
import assets from "../assets/assets";
import { NavLink } from "react-router-dom";

const BannerPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const bannerData = [
    { id: 1, banner: assets.banner, interactions: 10144, uploadDate: "24-Jan-2025", status: "Active" },
    { id: 2, banner: assets.banner2, interactions: 1244, uploadDate: "24-Jan-2025", status: "Not Active" },
    { id: 3, banner: assets.banner3, interactions: 24997, uploadDate: "23-Jan-2025", status: "Not Active" },
    { id: 4, banner: assets.banner4, interactions: 632878, uploadDate: "16-Jan-2025", status: "Active" },
    { id: 5, banner: assets.banner5, interactions: 98245, uploadDate: "15-Jan-2025", status: "Active" },
    { id: 6, banner: assets.banner6, interactions: 78490, uploadDate: "14-Jan-2025", status: "Not Active" },
    { id: 7, banner: assets.banner7, interactions: 675, uploadDate: "13-Jan-2025", status: "Active" },
  ];

  const filteredBanners = activeTab === "All" ? bannerData : bannerData.filter(banner => activeTab === "Active" ? banner.status === "Active" : banner.status !== "Active");

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

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-200 rounded-xl">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-3xl font-bold text-yellow-500 mb-2 ml-8 md:ml-0 md:mb-0">Banners</h1>
          
        </div>

        {/* Navigation Tabs */}
        <div className="mb-4 flex overflow-x-auto space-x-4 pb-2">
          {['All', 'Active', 'Bin'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 font-bold rounded-xl whitespace-nowrap ${
                activeTab === tab ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab} ({tab === 'All' ? bannerData.length : tab === 'Active' ? bannerData.filter(b => b.status === 'Active').length : bannerData.filter(b => b.status !== 'Active').length})
            </button>
          ))}
        </div>

        {/* Banner Table */}
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full bg-white shadow-md rounded-2xl">
            <thead>
              <tr className="bg-yellow-400 text-white">
                <th className="p-4">S.No</th>
                <th>Banner</th>
                <th>Interactions</th>
                <th>Upload Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBanners.map((banner, index) => (
                <tr key={banner.id} className="border-b">
                  <td className="p-4 text-center">{index + 1}</td>
                  <td className="p-0 lg:p-4 m-1">
                    <img src={banner.banner} alt={`Banner ${index + 1}`} className="w-50 h-20 object-cover rounded-lg" />
                  </td>
                  <td className="p-4  text-center">{banner.interactions.toLocaleString()}</td>
                  <td className="p-4 text-center">{banner.uploadDate}</td>
                  <td className={`p-4 text-center font-bold ${banner.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{banner.status}</td>
                  <td className="p-4 flex flex-col md:flex-row justify-center  space-y-2 md:space-y-0 md:space-x-2">
                    {banner.status !== 'Active' ? (
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 cursor-pointer px-4 rounded">Activate</button>
                    ) : (
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 cursor-pointer px-4 rounded">Remove</button>
                    )}
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 cursor-pointer rounded">Delete</button>
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

export default BannerPage;