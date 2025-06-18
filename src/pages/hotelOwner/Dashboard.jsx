import React, { useState } from "react";
import Title from '../../components/Title'
import {assets, dashboardDummyData} from '../../assets/assets'
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  return (
    <div>
      <Title
        textAlign="left"
        heading="Dashboard"
        paragraph="Welcome to your dashboard. View key insights, track performance, and manage your room listings—all in one place."
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Total Bookings */}
        <div className="flex items-center gap-4 bg-primary/10 border border-primary/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <img
            src={assets.totalBookingIcon}
            alt="total bookings"
            className="h-12 w-12"
          />
          <div>
            <p className="text-lg text-blue-500">Total Bookings</p>
            <p className="text-base text-neutral-400">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="flex items-center gap-4 bg-primary/10 border border-primary/20 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
          <img
            src={assets.totalRevenueIcon}
            alt="total revenue"
            className="h-12 w-12"
          />
          <div>
            <p className="text-lg text-blue-500">Total Revenue</p>
            <p className="text-base text-neutral-400">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5 mt-5">
        Recent Bookings
      </h2>
      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">Room Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">Total Amount</th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">Payment Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">{item.user.username}</td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">{item.room.roomType}</td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">${item.totalPrice}</td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 flex text-center justify-center">
                  <button className={`px-4 py-2 rounded-full cursor-pointer ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                    {item.isPaid ? 'Completed' : 'Pending'}              
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;