import React, { useState } from 'react';
import { HiHome, HiUsers, HiPhotograph, HiFolder, HiCurrencyDollar, HiChartBar, HiArrowCircleUp, HiUserCircle, HiCog, HiLogout, HiMenu, HiX } from "react-icons/hi";
import { MdReportGmailerrorred } from "react-icons/md";

import { NavLink } from "react-router-dom";
import assets from '../assets/assets';

const Withdrawals = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [filter, setFilter] = useState('All');
    const [dropdownValue, setDropdownValue] = useState('Recent');
    const tabs = ['All', 'Pending', 'Approved'];

    const transactions = [
        { id: 1, user: 'Ravi Teja', uniqueId: '738399', amount: '10,000 ₹', date: '24-Jan-2025', status: 'Pending' },
        { id: 2, user: 'Akash Sharma', uniqueId: '628299', amount: '10,000 ₹', date: '24-Jan-2025', status: 'Approved' },
        { id: 3, user: 'Rohit Sharma', uniqueId: '638392', amount: '10,000 ₹', date: '23-Jan-2025', status: 'Pending' },
        { id: 4, user: 'Rakesh Rao', uniqueId: '65272891', amount: '10,000 ₹', date: '16-Jan-2025', status: 'Solved' },
        { id: 5, user: 'Ajay Chaudhary', uniqueId: '637382', amount: '10,000 ₹', date: '15-Jan-2025', status: 'Pending' },
        { id: 6, user: 'Sagar Shokeen', uniqueId: '7282899', amount: '10,000 ₹', date: '14-Jan-2025', status: 'Approved' },
        { id: 7, user: 'Virat Kohli', uniqueId: '5637838', amount: '10,000 ₹', date: '13-Jan-2025', status: 'Pending' },
    ];
    const handleDropdownChange = (e) => {
        setDropdownValue(e.target.value);
    };

    const filteredTransactions = transactions.filter(t => filter === 'All' || t.status === filter);

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
                <div className='flex justify-between'>
                <h1 className="text-3xl font-bold text-yellow-400 ml-8 md:ml-0 mb-6">Withdrawals</h1>
                <div className="flex items-center gap-4">
                    <img src={assets.profile} alt="Profile" className=" h-10 w-10md:w-20 md:h-20 rounded-full object-cover" />
                    <h2 className="text-lg font-semibold text-gray-700">Admin</h2>
                </div>
                </div>
                {/* Tabs */}
                <div className='flex justify-between items-center'>
                    <div className="flex space-x-4 mb-6 overflow-x-auto">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-4 py-2 font-bold rounded-xl whitespace-nowrap ${
                                    filter === tab ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-yellow-400'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
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

                {/* Withdrawals Table */}
                <div className="bg-white shadow-md rounded-2xl p-4 overflow-x-auto">
                    <table className=" w-full table-auto ">
                        <thead>
                            <tr className="bg-yellow-400 text-left h-[70px]  text-gray-800 rounded-xl">
                                <th className="p-2">S.No</th>
                                <th>User Name</th>
                                <th >Unique ID</th>
                                <th className='p-2'>Amount</th>
                                <th className='p-2'>Date</th>
                                <th className='p-2'>Status</th>
                                <th className='p-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((t, index) => (
                                <tr key={t.id} className="border-t h-[60px] ">
                                    <td className="p-2">{index + 1}</td>
                                    <td>{t.user}</td>
                                    <td>{t.uniqueId}</td>
                                    <td>{t.amount}</td>
                                    <td>{t.date}</td>
                                    <td className={t.status === 'Approved' ? 'text-green-500' : t.status === 'Pending' ? 'text-yellow-500' : 'text-gray-500'}>
                                        {t.status}
                                    </td>
                                    <td className="min-w-[150px]">
                                        {t.status === 'Approved' ? (
                                            <span className="bg-green-500 text-white font-bold py-1 px-4 ml-2 rounded cursor-default">
                                                Approved
                                            </span>
                                        ) : (
                                            <div className="flex space-x-2">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 ml-2 rounded whitespace-nowrap">
                                                    Approve
                                                </button>
                                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded whitespace-nowrap">
                                                    Reject 
                                                </button>
                                                <MdReportGmailerrorred  className = "text-3xl text-yellow-400"/>
                                            </div>
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

export default Withdrawals;