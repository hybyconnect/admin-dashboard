import React, { useState } from 'react';
import assets from '../assets/assets';
import { HiHome, HiUsers, HiPhotograph, HiFolder, HiCurrencyDollar, HiChartBar, HiArrowCircleUp, HiUserCircle, HiCog, HiLogout, HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const TransactionsPage = () => {
    const [filter, setFilter] = useState('All');
    const [dropdownValue, setDropdownValue] = useState('Recent');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const tabs = ['All', 'Debit', 'Credit'];

    const transactions = [
        { id: 1, details: 'Ravi Kumar Withdraw 10k Fire', transactionId: '2398421907', fromTo: 'Paytm Bank', crDr: '10,000 ₹ Dr', date: '24-Jan-2025', status: 'Completed' },
        { id: 2, details: '100 Fire purchased by Ravi Kumar', transactionId: '23410921509', fromTo: 'PNB Bank', crDr: '100 ₹ Cr', date: '24-Jan-2025', status: 'Not Active' },
        { id: 3, details: '1200 Fire purchased by Ravi Kumar', transactionId: '873264307', fromTo: 'Bank Of Baroda', crDr: '999 ₹ Cr', date: '23-Jan-2025', status: 'Canceled' },
        { id: 4, details: '500 Fire purchased by Ravi Kumar', transactionId: '857912078', fromTo: 'SBI', crDr: '499 ₹ Cr', date: '16-Jan-2025', status: 'Completed' },
        { id: 5, details: '100 Fire purchased by Ravi Kumar', transactionId: '825987022', fromTo: 'Google Pay UPI', crDr: '1000 ₹ Cr', date: '15-Jan-2025', status: 'Completed' },
        { id: 6, details: 'Ravi Kumar Withdraw 10k Fire', transactionId: '897254957', fromTo: 'Indian Bank', crDr: '1000 ₹ Cr', date: '14-Jan-2025', status: 'Pending' },
        { id: 7, details: 'Jasmine Withdraw 10k Fire', transactionId: '298739911', fromTo: 'RBL Bank', crDr: '10,000 ₹ Dr', date: '13-Jan-2025', status: 'Pending' },
    ];

    const renderStatus = (status) => {
        const statusColors = {
            Completed: 'text-green-500',
            'Not Active': 'text-gray-500',
            Canceled: 'text-red-500',
            Pending: 'text-yellow-500',
        };
        return <span className={`font-bold ${statusColors[status]}`}>{status}</span>;
    };

    const handleDropdownChange = (e) => {
        setDropdownValue(e.target.value);
    };

    const filteredTransactions = transactions.filter((transaction) => {
        if (filter === 'All') return true;
        if (filter === 'Debit') return transaction.crDr.includes('Dr');
        if (filter === 'Credit') return transaction.crDr.includes('Cr');
        return true;
    });


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
            <div className="flex-1 p-8 bg-gray-100 rounded-xl">
                <div className="mb-8 flex flex-row md:flex-row justify-between items-start md:items-center gap-4">
                    <h1 className="text-3xl font-bold ml-8 md:ml-0 text-yellow-500">Transactions</h1>
                    <div className="flex items-center gap-4">
                    <img src={assets.profile} alt="Profile" className="h-10 w-10 md:w-20 md:h-20 rounded-full object-cover" />
                    <h2 className="text-lg font-semibold text-gray-700">Admin</h2>
                </div>
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

                {/* Transactions Table */}
                <div className="bg-white shadow-md rounded-2xl p-4 overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-yellow-400 rounded-xl  text-left text-gray-800">
                                <th className="p-2 h-[70px]">S.No</th>
                                <th>Details</th>
                                <th>Transaction ID</th>
                                <th>From/To</th>
                                <th>Cr/Dr</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((transaction, index) => (
                                <tr key={transaction.id} className="border-t">
                                    <td className="p-2 h-[60px] text-gray-600">{index + 1}</td>
                                    <td className="min-w-[200px]">{transaction.details}</td>
                                    <td className="min-w-[150px]">{transaction.transactionId}</td>
                                    <td className="min-w-[120px]">{transaction.fromTo}</td>
                                    <td className="min-w-[100px]">{transaction.crDr}</td>
                                    <td className="min-w-[120px]">{transaction.date}</td>
                                    <td className="min-w-[120px]">{renderStatus(transaction.status)}</td>
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