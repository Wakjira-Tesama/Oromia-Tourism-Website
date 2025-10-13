import React, { useState, useMemo } from "react";

type StatusType = "Pending" | "Confirmed" | "Cancelled";
type StatusFilter = StatusType | "all";

interface Booking {
  id: number;
  customer: string;
  destination: string;
  date: string;
  amount: number;
  status: StatusType;
}

interface StatusConfig {
  [key: string]: {
    label: string;
    icon: string;
    bg: string;
    color: string;
  };
}

const initialBookings: Booking[] = [
  {
    id: 1,
    customer: "John Doe",
    destination: "Bale",
    date: "2024-02-15",
    amount: 1250,
    status: "Confirmed",
  },
  {
    id: 2,
    customer: "Jane Smith",
    destination: "Wanci",
    date: "2024-03-01",
    amount: 1800,
    status: "Pending",
  },
  {
    id: 3,
    customer: "Mike Johnson",
    destination: "Borana",
    date: "2024-02-20",
    amount: 2100,
    status: "Cancelled",
  },
  {
    id: 4,
    customer: "Sarah Wilson",
    destination: "Sof Omar",
    date: "2024-02-28",
    amount: 1500,
    status: "Confirmed",
  },
  {
    id: 5,
    customer: "David Brown",
    destination: "Abjaata",
    date: "2024-03-05",
    amount: 1750,
    status: "Pending",
  },
];

const statusConfig: StatusConfig = {
  all: {
    label: "All Bookings",
    icon: "fa-list-ul",
    bg: "bg-white/50 dark:bg-gray-800/50",
    color: "text-gray-600 dark:text-gray-400",
  },
  Pending: {
    label: "Pending",
    icon: "fa-clock",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    color: "text-yellow-700 dark:text-yellow-400",
  },
  Confirmed: {
    label: "Confirmed",
    icon: "fa-check-circle",
    bg: "bg-green-100 dark:bg-green-900/30",
    color: "text-green-700 dark:text-green-400",
  },
  Cancelled: {
    label: "Cancelled",
    icon: "fa-times-circle",
    bg: "bg-red-100 dark:bg-red-900/30",
    color: "text-red-700 dark:text-red-400",
  },
};

const Bookings: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("all");
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    field: keyof Booking | null;
    direction: "asc" | "desc";
  }>({ field: null, direction: "asc" });

  const filteredBookings = useMemo(() => {
    let list = [...bookings];
    if (selectedStatus !== "all")
      list = list.filter((b) => b.status === selectedStatus);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (b) =>
          b.customer.toLowerCase().includes(q) ||
          b.destination.toLowerCase().includes(q) ||
          String(b.amount).includes(q)
      );
    }
    if (sortConfig.field) {
      list.sort((a, b) => {
        let av = a[sortConfig.field!];
        let bv = b[sortConfig.field!];
        if (sortConfig.field === "amount") {
          av = Number(av);
          bv = Number(bv);
        } else {
          av = String(av).toLowerCase();
          bv = String(bv).toLowerCase();
        }
        if (av < bv) return sortConfig.direction === "asc" ? -1 : 1;
        if (av > bv) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return list;
  }, [bookings, selectedStatus, search, sortConfig]);

  const changeSort = (field: keyof Booking) => {
    setSortConfig((prev) =>
      prev.field === field
        ? { field, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { field, direction: "asc" }
    );
  };

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(n);

  // **Notification LocalStorage + future API call**
  const pushNotification = (booking: Booking, newStatus: StatusType) => {
    const notifications = JSON.parse(
      localStorage.getItem("notifications") || "[]"
    );
    const newNotif = {
      id: Date.now(),
      userImage: "/images/user/user-02.jpg",
      message: `Booking for ${booking.destination} (${booking.customer}) is now ${newStatus}`,
      type: newStatus,
      time: new Date().toISOString(),
    };
    localStorage.setItem(
      "notifications",
      JSON.stringify([newNotif, ...notifications])
    );

    // ***Backend ready:***
    // await fetch("/api/notifications", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newNotif) });
  };

  const updateStatus = (id: number, current: StatusType) => {
    const next: StatusType =
      current === "Pending"
        ? "Confirmed"
        : current === "Confirmed"
        ? "Cancelled"
        : "Pending";
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: next } : b))
    );
    const updatedBooking = bookings.find((b) => b.id === id);
    if (updatedBooking) pushNotification(updatedBooking, next);
  };

  const handleDelete = (id: number) => {
    if (!window.confirm("Delete this booking?")) return;
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="p-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold">Bookings</h2>
          <p className="text-sm text-gray-600">
            Manage all your travel bookings
          </p>
        </div>
      </div>

      {/* Status Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {Object.keys(statusConfig).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedStatus(key as StatusFilter)}
            className={`px-4 py-2 rounded-lg ${
              selectedStatus === key
                ? `${statusConfig[key].bg} ${statusConfig[key].color}`
                : "bg-gray-200"
            }`}
          >
            <i className={`fas ${statusConfig[key].icon} mr-2`}></i>
            {statusConfig[key].label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="mb-4 relative max-w-md">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search bookings..."
          className="w-full pl-10 pr-10 py-2 rounded-lg border"
        />
        <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No bookings found
          </div>
        ) : (
          <table className="min-w-full divide-y">
            <thead>
              <tr>
                {["customer", "destination", "date", "amount"].map((field) => (
                  <th
                    key={field}
                    onClick={() => changeSort(field as keyof Booking)}
                    className="px-6 py-3 cursor-pointer"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                    {sortConfig.field === field && (
                      <i
                        className={`fas ml-2 ${
                          sortConfig.direction === "asc"
                            ? "fa-sort-up"
                            : "fa-sort-down"
                        }`}
                      ></i>
                    )}
                  </th>
                ))}
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{b.customer}</td>
                  <td className="px-6 py-4">{b.destination}</td>
                  <td className="px-6 py-4">
                    {new Date(b.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">{formatCurrency(b.amount)}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => updateStatus(b.id, b.status)}
                      className={`${statusConfig[b.status].bg} ${
                        statusConfig[b.status].color
                      } px-3 py-1 rounded-full`}
                    >
                      {b.status}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(b.id)}
                      className="text-red-600"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Bookings;
