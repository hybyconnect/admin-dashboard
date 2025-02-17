import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
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
  HiMenu,
  HiX,
} from "react-icons/hi";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import assets from "../assets/assets";
import { NavLink } from "react-router-dom";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  // Bar chart data
  const chartData = {
    labels: ["24-Jan-2025", "25-Jan-2025", "26-Jan-2025", "27-Jan-2025", "28-Jan-2025", "29-Jan-2025", "30-Jan-2025"],
    datasets: [
      {
        label: "New Users",
        data: [7000, 5000, 6000, 4000, 4500, 5000, 5500],
        backgroundColor: "#f5e020",
        borderRadius: 8,
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: ["New Influencers", "New Brands", "Fire Top Ups", "Withdrawal Requests"],
    datasets: [
      {
        data: [132, 12, 28, 18],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const cardStyle = "p-2 bg-gray-50 shadow-md rounded-2xl text-center flex flex-col items-center gap-3";

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
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 md:mt-90 rounded-xl mt-8 w-full flex items-center justify-center">
          <HiLogout className="mr-2" />
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl ml-8 md:ml-0 font-bold text-yellow-500">Hi, Welcome Back!</h1>
        </div>

        {/* First Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={cardStyle}>
            <div className="text-yellow-500 text-4xl">👥</div>
            <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
            <p className="text-2xl font-bold text-gray-800">15,091</p>
          </div>
          <div className={cardStyle}>
            <div className="text-green-500 text-4xl">🟢</div>
            <h2 className="text-lg font-semibold text-gray-700">Live Users</h2>
            <p className="text-2xl font-bold text-gray-800">157</p>
          </div>
          <div className={cardStyle}>
            <div className="text-red-500 text-4xl">⛔</div>
            <h2 className="text-lg font-semibold text-gray-700">Blocked Users</h2>
            <p className="text-2xl font-bold text-gray-800">65</p>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div className={cardStyle}>
            <div className="text-blue-500 text-4xl">📊</div>
            <h2 className="text-lg font-semibold text-gray-700">Total Banners</h2>
            <p className="text-2xl font-bold text-gray-800">23</p>
          </div>
          <div className={cardStyle}>
            <div className="text-green-500 text-4xl">✅</div>
            <h2 className="text-lg font-semibold text-gray-700">Active Banners</h2>
            <p className="text-2xl font-bold text-gray-800">9</p>
          </div>
        </div>

        {/* Chart and Today's Stats */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Chart */}
          <div className="w-full md:w-2/3 bg-white p-6 shadow-md rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">User Chart</h2>
              <select className="border rounded-md px-2 py-1 text-sm text-gray-600">
                <option>Week</option>
                <option>Month</option>
                <option>Year</option>
              </select>
            </div>
            <Bar data={chartData} />
          </div>

          {/* Today's Stats with Pie Chart */}
          <div className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Today</h2>
            
            {/* Pie Chart */}
            <div className="h-48 mb-6">
              <Pie 
                data={pieData}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>

            {/* Stats List with Color Coding */}
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF6384]"></span>
                  <span>New Influencers</span>
                </div>
                <span>(132)</span>
              </li>
              <li className="flex justify-between items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#36A2EB]"></span>
                  <span>New Brands</span>
                </div>
                <span>(12)</span>
              </li>
              <li className="flex justify-between items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FFCE56]"></span>
                  <span>Fire Top Ups</span>
                </div>
                <span>(28)</span>
              </li>
              <li className="flex justify-between items-center text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#4BC0C0]"></span>
                  <span>Withdrawal Requests</span>
                </div>
                <span>(18)</span>
              </li>
            </ul>

            {/* Earnings Section */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center text-sm text-gray-600">
              <span>Earnings</span>
              <div className="flex items-center gap-1">
                <span>Withdrawal Approved</span>
                <span className="text-green-500 font-semibold">(28,873)</span>
                <HiArrowCircleUp className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;