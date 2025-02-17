import React, { useState } from "react";
import { HiHome, HiUsers, HiPhotograph, HiFolder, HiCurrencyDollar, HiChartBar, HiArrowCircleUp, HiUserCircle, HiCog, HiLogout, HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const UserProfilePanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Info");

  const userInfo = {
    name: "Mira Korsgaard",
    role: "Influencer",
    status: "Active 5 minutes ago",
    email: "mira2649korsgaard@gmail.com",
    mobile: "+91 80 766 40123",
    whatsapp: "+91 80 766 40123",
    location: "Rajasthan, Jodhpur",
    category: "Dance",
    campaigns: 187,
    fireEarned: "1,67,879",
    registrationDate: "14-Jan-2025",
    withdraws: "4 (₹16,000)"
  };

  const socialLinks = [
    { platform: "Instagram", followers: "4.2 Million", url: "https://instagram.com/miraqeq", icon:`${assets.insta}` },
    { platform: "YouTube", followers: "3 Million", url: "https://youtube.com/miraqeq", icon:`${assets.youtube}` },
    { platform: "Facebook", followers: "4.4 Million", url: "https://facebook.com/miraqeq", icon: `${assets.facebook}` },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Hamburger Button (Mobile) */}
      <button
        className="absolute top-4 left-4 md:hidden  z-50 bg-white p-2 rounded-lg shadow-lg"
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
          <img src={assets.logo} alt="hyby logo" className="text-2xl ml-8 lg:ml-0 font-bold text-gray-700"/>
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
      <div className="flex-1 bg-gray-200 p-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold ml-8 md:ml-0 text-yellow-400">User Profile Panel</h1>
          
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <div className="flex flex-row md:flex-row items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full">
              <img src={assets.profile} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{userInfo.name}</h2>
              <p className="text-yellow-500 font-semibold">{userInfo.role}</p>
              <p className="text-gray-500">Status: {userInfo.status}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto gap-4 mb-6 border-b pb-2">
            {['Info', 'Campaigns', 'Likes', 'Saved', 'Selected Influencer', 'Withdrawals'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-semibold whitespace-nowrap ${
                  activeTab === tab ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Info Content */}
          {activeTab === 'Info' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <p>Email: {userInfo.email}</p>
              <p>Mobile Number: {userInfo.mobile}</p>
              <p>Whatsapp: {userInfo.whatsapp}</p>
              <p>State & City: {userInfo.location}</p>
              <p>Category: {userInfo.category}</p>
              <p>Campaigns: {userInfo.campaigns}</p>
              <p>Fire Earned: {userInfo.fireEarned}</p>
              <p>Registration Date: {userInfo.registrationDate}</p>
              <p>Withdrawals: {userInfo.withdraws}</p>
            </div>
          )}

          {/* Social Links */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Social Media Links</h3>
            <div className="flex flex-col md:flex-row gap-6">
              {socialLinks.map((link) => (
                <div key={link.platform} className="flex items-center gap-2">
                  <div className="w-10 h-10">
                    <img src={link.icon} alt={`${link.platform} icon`} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">{link.platform}</p>
                    <p className="text-gray-500">{link.followers}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePanel;