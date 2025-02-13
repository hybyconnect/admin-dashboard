// Dashboard.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import Sidebar from "../Components/Sidebar";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
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

  const cardStyle = "p-2 bg-gray-50 shadow-md rounded-2xl text-center flex flex-col items-center gap-3";

  return (
    <div className="flex min-h-screen bg-gray-200">
        <Sidebar />
      

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-yellow-400">Hi, Welcome Back!</h1>
          <span className="text-gray-500">Dashboard</span>
        </div>

        {/* First Row of Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
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
        <div className="grid grid-cols-2 gap-6 mb-4">
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
        <div className="flex justify-between gap-6">
          {/* Chart */}
          <div className="w-2/3 bg-white p-6 shadow-md rounded-2xl">
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

          {/* Today's Stats */}
          <div className="w-1/3 bg-white p-6 shadow-md rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Today</h2>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-600">
                <span>New Influencers</span>
                <span>(132)</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>New Brands</span>
                <span>(12)</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Fire Top Ups</span>
                <span>(28)</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Withdrawal Requests</span>
                <span>(18)</span>
              </li>
            </ul>
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