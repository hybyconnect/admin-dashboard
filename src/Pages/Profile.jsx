import React, { Profiler, useState } from "react";
import { HiOutlinePencil, HiHome,
  HiUsers,
  HiPhotograph,
  HiFolder,
  HiCurrencyDollar,
  HiChartBar,
  HiArrowCircleUp,
  HiUserCircle,
  HiCog,
  HiLogout,
  HiMenu,
  HiX, } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const Profile = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/50");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
            <img src={assets.logo} alt="logo" className="text-2xl ml-8 font-bold text-gray-700"/>
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
        <button className="bg-red-500 hover:bg-red-700 mt-90 text-white font-bold py-2 px-4 rounded-xl mt-8 w-full flex items-center justify-center">
            <HiLogout className="mr-2" />
            Log Out
        </button>
    </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-26">
        <h2 className="text-3xl font-bold text-yellow-500 ml-12 md:ml-0 ">Profile</h2>
        <div className="bg-white p-6 rounded-xl shadow-md mt-4">
          {/* Profile Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Info */}
            <div className="border border-yellow-500 p-4 h-[200px] rounded-xl">
              <div className="flex items-center py-4 gap-8">
                <img
                  src={assets.profile}
                  alt="User"
                  className="rounded-full w-30 h-30 "
                />
                <div>
                  <h3 className="text-lg font-semibold">Diksha Sharma</h3>
                  <p className="text-sm text-yellow-500">Head Admin</p>
                  <p className="text-sm text-gray-600">Web Development Assistant Manager</p>
                </div>
              </div>
            </div>
            {/* Avatar Change */}
            <div className="border border-yellow-500 p-4 rounded-xl text-center">
              <img
                src={avatar}
                alt="Avatar"
                className="rounded-full w-30 h-30 mx-auto"
              />
              <div className="flex text-sm justify-between items-centers gap-6 mt-2">
              <label className="flex justify-center items-center text-yellow-500 mx-auto mt-2 cursor-pointer">
                <HiOutlinePencil className="mr-2" /> Change Avatar
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </label>
              <button className=" w-1/3 py-2 bg-yellow-500 text-white rounded">
                Submit
              </button>
              </div>
            </div>
          </div>

          {/* Change Password & Edit Profile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Edit Profile */}
            <div className="border border-yellow-500 p-4 rounded-xl">
              <h3 className="font-semibold mb-2">Edit Profile</h3>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Bio"
                className="w-full p-2 border rounded mb-2"
              />
              <button className="w-full bg-yellow-500 text-white py-2 rounded">
                Submit
              </button>
            </div>
            {/* Change Password */}
            <div className="border border-yellow-500 p-4 rounded-xl">
              <h3 className="font-semibold mb-2">Change Password</h3>
              <input
                type="password"
                placeholder="Current Password"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full p-2 border rounded mb-2"
              />
              <button className="w-full mt-1 md:mt-13  bg-yellow-500 text-white py-2 rounded">
                Submit
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;