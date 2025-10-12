import React from "react";
import BookingAnalytics from "../../components/ecommerce/BookingAnalytics";
import RevenueAnalytics from "../../components/ecommerce/RevenueAnalytics";
import CustomerRatingsAnalytics from "../../components/ecommerce/CustomerRatingsAnalytics";
import PageMeta from "../../components/common/PageMeta";

export default function Dashboard() {
  return (
    <>
      <PageMeta
        title="Travel Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is Travel Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* KPI Cards */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Bookings", value: "1,482", change: "↑ 12.5%" },
            { title: "Revenue", value: "$245,890", change: "↑ 8.2%" },
            { title: "Active Tours", value: "38", change: "↑ 4.1%" },
            { title: "Customer Rating", value: "4.8/5.0", change: "↑ 0.3" },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
            >
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {card.title}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {card.value}
              </h3>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                {card.change}
              </p>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="col-span-12 lg:col-span-6 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Bookings
          </h2>
          <div className="mt-4 space-y-4">
            {[
              {
                name: "Maldives Luxury Resort",
                customer: "John Doe • 2 Adults",
                status: "Confirmed",
              },
              {
                name: "Bali Adventure",
                customer: "Jane Smith • 1 Adult",
                status: "Pending",
              },
            ].map((b, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {b.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {b.customer}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    b.status === "Confirmed"
                      ? "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30"
                      : "text-yellow-700 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30"
                  }`}
                >
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="col-span-12 lg:col-span-6 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Popular Destinations
          </h2>
          <div className="mt-4 space-y-4">
            {[
              { name: "Swiss Alps", rating: "4.9", bookings: "152" },
              { name: "Maldives", rating: "4.8", bookings: "138" },
            ].map((d, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/10 rounded-lg flex items-center justify-center">
                  <i className="fas fa-mountain text-blue-600 dark:text-blue-400"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {d.name}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <i className="fas fa-star text-yellow-400"></i>
                    <span className="text-sm text-gray-500">{d.rating}</span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-500">
                      {d.bookings} bookings this month
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Analytics */}
        <div className="col-span-12 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Booking Analytics
          </h2>
          <div className="mt-4 h-64">
            <BookingAnalytics />
          </div>
        </div>

        {/* Revenue Trends */}
        <div className="col-span-12 lg:col-span-6 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Revenue Trends
          </h2>
          <div className="mt-4 h-64">
            <RevenueAnalytics />
          </div>
        </div>

        {/* Customer Ratings Trend */}
        <div className="col-span-12 lg:col-span-6 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Customer Ratings Trend
          </h2>
          <div className="mt-4 h-64">
            <CustomerRatingsAnalytics />
          </div>
        </div>
      </div>
    </>
  );
}
