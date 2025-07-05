import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
  const [dashboardData] = useState(dashboardDummyData)

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place."
      />

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        <div className="bg-white shadow-md rounded-xl p-5 flex items-center gap-4">
          <img src={assets.totalBookingIcon} alt="bookings" className="h-10 hidden sm:block" />
          <div>
            <p className="text-blue-600 font-semibold">Total Bookings</p>
            <p className="text-gray-800">{dashboardData.totalBookings}</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-xl p-5 flex items-center gap-4">
          <img src={assets.totalRevenueIcon} alt="revenue" className="h-10 hidden sm:block" />
          <div>
            <p className="text-blue-600 font-semibold">Total Revenue</p>
            <p className="text-gray-800">${dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <h2 className="text-xl font-semibold text-blue-950 mt-10 mb-4">Recent Bookings</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4">User Name</th>
              <th className="text-left py-3 px-4 hidden sm:table-cell">Room Name</th>
              <th className="text-center py-3 px-4">Total Amount</th>
              <th className="text-center py-3 px-4">Payment Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-4">{item.user.username}</td>
                <td className="py-3 px-4 hidden sm:table-cell">{item.room.roomType}</td>
                <td className="py-3 px-4 text-center">${item.totalPrice}</td>
                <td className="py-3 px-4 text-center">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    item.isPaid ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.isPaid ? 'Completed' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
