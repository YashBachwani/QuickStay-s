import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
  const [dashboardData] = useState(dashboardDummyData)

  return (
    <div className="px-4 py-6">
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place."
      />

      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {/* Total Bookings */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg border border-blue-100 rounded-xl p-6 flex items-center gap-5">
          <img src={assets.totalBookingIcon} alt="Total Bookings" className="h-12 hidden sm:block" />
          <div>
            <p className="text-blue-600 text-lg font-semibold">Total Bookings</p>
            <p className="text-gray-700 text-base">{dashboardData.totalBookings}</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-white/30 backdrop-blur-md shadow-lg border border-blue-100 rounded-xl p-6 flex items-center gap-5">
          <img src={assets.totalRevenueIcon} alt="Total Revenue" className="h-12 hidden sm:block" />
          <div>
            <p className="text-blue-600 text-lg font-semibold">Total Revenue</p>
            <p className="text-gray-700 text-base">${dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="text-xl text-blue-950 font-semibold mt-12 mb-4">Recent Bookings</h2>
      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white/40 backdrop-blur-lg max-h-80 overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="py-3 px-4 text-left">User Name</th>
              <th className="py-3 px-4 text-left max-sm:hidden">Room Name</th>
              <th className="py-3 px-4 text-center">Total Amount</th>
              <th className="py-3 px-4 text-center">Payment Status</th>
            </tr>
          </thead>
          <tbody className="bg-white/50">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index} className="border-t border-gray-300 text-gray-700">
                <td className="py-3 px-4">{item.user.username}</td>
                <td className="py-3 px-4 max-sm:hidden">{item.room.roomType}</td>
                <td className="py-3 px-4 text-center">${item.totalPrice}</td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      item.isPaid ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                    }`}
                  >
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
