import React, { useState } from "react";
import {
  HiUserCircle,
  HiLockClosed,
  HiBell,
  HiCreditCard,
  HiShieldCheck,
  HiLogout,
  HiHome,
  HiUsers,
  HiPhotograph,
  HiFolder,
  HiCurrencyDollar,
  HiChartBar,
  HiArrowCircleUp,
  
  HiCog,
  
  HiMenu,
  HiX,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile"); // State for active tab

  // Dummy data for profile and settings
  const profile = {
    name: "Diksha Sharma",
    role: "Influencer",
    email: "diksha.sharma@example.com",
    phone: "+91 98765 43210",
    bio: "Travel enthusiast and content creator.",
    location: "Mumbai, India",
  };

  const accountSettings = {
    language: "English",
    timezone: "IST (UTC +5:30)",
    currency: "INR",
  };

  const notificationSettings = {
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
  };

  const billingInfo = {
    cardNumber: "**** **** **** 1234",
    expiryDate: "12/25",
    billingAddress: "123, Main Street, Mumbai, India",
  };

  const securitySettings = {
    twoFactorAuth: false,
    lastLogin: "2023-10-15 14:30",
  };

  return (
    <div className="flex min-h-screen bg-gray-200">
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
          <img src={assets.logo} alt="Logo" className="text-2xl ml-8 font-bold text-gray-700" />
        </div>
        <nav>
          <ul className="space-y-6">
            {/* Dashboard Link */}
            <li className="flex items-center gap-2 text-yellow-500 cursor-pointer">
              <HiHome className="w-5 h-5 text-yellow-500" />
              <span>Dashboard</span>
            </li>
            {/* Other Links */}
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
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200">
        <button
          className={`flex items-center gap-2 p-2 rounded-lg ${
            activeTab === "profile"
              ? "bg-yellow-500 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <HiUserCircle className="w-5 h-5" />
          <span>Profile</span>
        </button>
        <button
          className={`flex items-center gap-2 p-2 rounded-lg ${
            activeTab === "account"
              ? "bg-yellow-500 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("account")}
        >
          <HiUserCircle className="w-5 h-5" />
          <span>Account</span>
        </button>
        <button
          className={`flex items-center gap-2 p-2 rounded-lg ${
            activeTab === "notifications"
              ? "bg-yellow-500 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("notifications")}
        >
          <HiBell className="w-5 h-5" />
          <span>Notifications</span>
        </button>
        <button
          className={`flex items-center gap-2 p-2 rounded-lg ${
            activeTab === "billing"
              ? "bg-yellow-500 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("billing")}
        >
          <HiCreditCard className="w-5 h-5" />
          <span>Billing</span>
        </button>
        <button
          className={`flex items-center gap-2 p-2 rounded-lg ${
            activeTab === "security"
              ? "bg-yellow-500 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("security")}
        >
          <HiShieldCheck className="w-5 h-5" />
          <span>Security</span>
        </button>
      </div>

      {/* Main Content */}
      <div>
        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold">{profile.name}</h4>
                  <p className="text-sm text-gray-600">{profile.role}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  defaultValue={profile.name}
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue={profile.email}
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  defaultValue={profile.phone}
                  className="w-full p-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Location"
                  defaultValue={profile.location}
                  className="w-full p-2 border rounded-md"
                />
                <textarea
                  placeholder="Bio"
                  defaultValue={profile.bio}
                  className="w-full p-2 border rounded-md md:col-span-2"
                  rows={3}
                />
              </div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Account Tab */}
        {activeTab === "account" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Language</label>
                <select
                  defaultValue={accountSettings.language}
                  className="w-full p-2 border rounded-md"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Timezone</label>
                <input
                  type="text"
                  defaultValue={accountSettings.timezone}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Currency</label>
                <select
                  defaultValue={accountSettings.currency}
                  className="w-full p-2 border rounded-md"
                >
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Email Notifications</span>
                <input
                  type="checkbox"
                  defaultChecked={notificationSettings.emailNotifications}
                  className="toggle"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Push Notifications</span>
                <input
                  type="checkbox"
                  defaultChecked={notificationSettings.pushNotifications}
                  className="toggle"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>SMS Notifications</span>
                <input
                  type="checkbox"
                  defaultChecked={notificationSettings.smsNotifications}
                  className="toggle"
                />
              </div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Billing Tab */}
        {activeTab === "billing" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Billing Information</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Card Number</label>
                <input
                  type="text"
                  defaultValue={billingInfo.cardNumber}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  defaultValue={billingInfo.expiryDate}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Billing Address</label>
                <input
                  type="text"
                  defaultValue={billingInfo.billingAddress}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === "security" && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Two-Factor Authentication</span>
                <input
                  type="checkbox"
                  defaultChecked={securitySettings.twoFactorAuth}
                  className="toggle"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Last Login</label>
                <input
                  type="text"
                  defaultValue={securitySettings.lastLogin}
                  className="w-full p-2 border rounded-md"
                  disabled
                />
              </div>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;