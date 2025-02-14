import React, { useState } from 'react';
import { HiHome, HiUsers, HiPhotograph, HiFolder, HiCurrencyDollar, HiChartBar, HiArrowCircleUp, HiUserCircle, HiCog, HiLogout, HiMenu, HiTrash, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import assets from '../assets/assets';

const TransactionsPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const tabs = ['All', 'Reports', 'System Support Request'];

    const transactions = [
        { id: 1, user: 'Ravi Teja', uniqueId: '738399', type: 'Requested Help for Withdrawal', date: '24-Jan-2025', status: 'Pending' },
        { id: 2, user: 'Akash Sharma', uniqueId: '628299', type: 'Request for Password change', date: '24-Jan-2025', status: 'Solved' },
        { id: 3, user: 'Rohit Sharma', uniqueId: '638392', type: 'Issue in Log in', date: '23-Jan-2025', status: 'Pending' },
        { id: 4, user: 'Rakesh Rao', uniqueId: '65272891', type: 'Issue In Script', date: '16-Jan-2025', status: 'Solved' },
        { id: 5, user: 'Ajay Chaudhary', uniqueId: '637382', type: 'Refund Request', date: '15-Jan-2025', status: 'Pending' },
        { id: 6, user: 'Sagar Shokeen', uniqueId: '7282899', type: 'Issue in Log in', date: '14-Jan-2025', status: 'Solved' },
        { id: 7, user: 'Virat Kohli', uniqueId: '5637838', type: 'Issue in Log in', date: '13-Jan-2025', status: 'Pending' },
    ];

    const filteredTransactions = transactions.filter(t => 
        (filter === 'All' || t.type.includes(filter)) &&
        (t.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
         t.uniqueId.includes(searchQuery) ||
         t.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
         t.date.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const renderStatus = (status) => {
        const statusColors = {
            Solved: 'text-green-500',
            Pending: 'text-yellow-500',
        };
        return <span className={`font-bold ${statusColors[status]}`}>{status}</span>;
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
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl mt-8 w-full flex items-center justify-center">
                    <HiLogout className="mr-2" />
                    Log Out
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-200">
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h1 className="text-3xl font-bold ml-8 md:ml-0 text-yellow-500">Reports</h1>
                    
                </div>

                {/* Tabs */}
                <div className='flex justify-between items-center'>
                    <div className="mb-4 flex overflow-x-auto space-x-4 pb-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`px-4 py-2 font-bold rounded-xl whitespace-nowrap ${
                                    filter === tab
                                        ? 'bg-yellow-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                } hover:bg-yellow-400`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                </div>
                {/* Transactions Table */}
                <div className="bg-white shadow-md rounded-2xl p-4 overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-yellow-400 text-left text-gray-800 rounded-xl">
                                <th className="p-2 h-[70px]">S.No</th>
                                <th>User Name</th>
                                <th>Unique ID</th>
                                <th>Report Type</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((t, index) => (
                                <tr key={t.id} className="border-t">
                                    <td className="p-2 h-[60px]">{index + 1}</td>
                                    <td className="min-w-[150px]">{t.user}</td>
                                    <td className="min-w-[120px]">{t.uniqueId}</td>
                                    <td className="min-w-[200px]">{t.type}</td>
                                    <td className="min-w-[120px]">{t.date}</td>
                                    <td className="min-w-[120px]">{renderStatus(t.status)}</td>
                                    <td className="min-w-[100px]">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white w-[90px] font-bold cursor-pointer py-1 px-4 rounded">
                                            View
                                        </button>
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

export default TransactionsPage;